/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module";
import ImageUploader from "quill-image-uploader";
import { ImageDrop } from "quill-image-drop-module";
import { makeApi, URLS } from "Utils/apiURL";
import { EditorUtils } from "Utils/EditorUtils";
import { fileAttachmentStore } from "Stores/FileAttachmentStore";
import { writingAssistantStoreData } from "Stores/WritingAssistantData";
import FileUpload from "Components/FileAttachment/FileUpload";
import FileAttachmentList from "Components/FileAttachment/FileAttachmentList";
import FileUploadingLoader from "Components/FileAttachment/FileUplaodingLoader";
import PerformTaskFileUploadingLoader from "Components/FileAttachment/PerformTaskFileUploadingLoader";
import TokenVariable from "Components/common/TokenVariable";
import { toasterState } from "Components/common/toaster";
import { MAX_IMAGE_SIZE_ALLOWED } from "Static/constant";
import { fileLimitExceedState } from "Components/FileAttachment/FileLimitExceedPopup";
import ToolbarTrackingIcon from "Components/common/ToolbarTrackingIcon";
import RewriteAi from "Components/WritingAssistant/ChatGptInEditor/RewriteAi";
import PerformTaskFileAttachment from "Components/FileAttachment/PerformTaskFileAttachment";

var Block = Quill.import("blots/block");
let taskQuillRef = null;
let quillRef = null;

// Registering modules start
if (Block) {
  Block.tagName = "div";
  Quill.register(Block, true);
}

Quill.register("modules/imageResize", ImageResize, true);
Quill.register("modules/imageUploader", ImageUploader);
Quill.register("modules/imageDrop", ImageDrop);
let Link = Quill.import("formats/link");

Link.sanitize = function (url) {
  // prefix default protocol.
  let protocol = url.slice(0, url.indexOf(":"));
  if (this.PROTOCOL_WHITELIST.indexOf(protocol) === -1) {
    url = "http://" + url;
  }
  // Link._sanitize function
  let anchor = document.createElement("a");
  anchor.href = url;
  protocol = anchor.href.slice(0, anchor.href.indexOf(":"));
  return this.PROTOCOL_WHITELIST.indexOf(protocol) > -1
    ? url
    : this.SANITIZED_URL;
};

var SizeStyle = Quill.import("attributors/style/size");
SizeStyle.whitelist = ["9.75px", "13px", "19.5px", "32.5px"];

let fonts = Quill.import("attributors/style/font");
fonts.whitelist = [
  "sans-serif",
  "serif",
  "Courier",
  "Georgia",
  "Gill Sans",
  "Garamond",
  "Helvetica",
  "monospace",
  "Palatino",
  "Tahoma",
  "Verdana"
];

Quill.register(SizeStyle, true);
Quill.register(fonts, true);
Quill.register(Link, true);

// Registering modules end

const modules = {
  toolbar: [
    ["bold", "italic", "image"],
    ["link"],
    [
      {
        color: [
          "#000000",
          "#e60000",
          "#ff9900",
          "#ffff00",
          "#008a00",
          "#0066cc",
          "#9933ff",
          "#ffffff",
          "#facccc",
          "#ffebcc",
          "#ffffcc",
          "#cce8cc",
          "#cce0f5",
          "#ebd6ff",
          "#bbbbbb",
          "#f06666",
          "#ffc266",
          "#ffff66",
          "#66b966",
          "#66a3e0",
          "#c285ff",
          "#888888",
          "#a10000",
          "#b26b00",
          "#b2b200",
          "#006100",
          "#0047b2",
          "#6b24b2",
          "#444444",
          "#5c0000",
          "#663d00",
          "#666600",
          "#003700",
          "#002966",
          "#3d1466"
        ]
      }
    ],
    [({ list: "ordered" }, { list: "bullet" })],
    [{ font: fonts.whitelist }],
    [{ align: [] }],
    [{ size: ["9.75px", "13px", "19.5px", "32.5px"] }],
    ["variables"]
  ],
  clipboard: {
    matchVisual: false
  },
  imageUploader: {
    upload: file => {
      return new Promise((resolve, reject) => {
        if (validateImage(file)) {
          const formData = new FormData();
          formData.append("file", file);
          const config = {
            url: URLS.uploadImage ? URLS.uploadImage : "",
            method: "POST",
            data: formData
          };
          makeApi(config)
            .then(result => {
              if (+result?.request?.status === 417) {
                resolve("");
                toasterState.setToastMsg(
                  `Invalid image format. Please try again with a supported formats (.png, .jpg, .jpeg, .gif).`,
                  "fail"
                );
              } else {
                if (result?.data?.url) {
                  resolve(result.data.url);
                } else {
                  resolve("");
                  toasterState.setToastMsg(
                    `Image upload failed. Please try again.`,
                    "fail"
                  );
                }
              }
            })
            .catch(error => {
              reject("");
              toasterState.setToastMsg(
                `Image upload failed. Please try again.`,
                "fail"
              );
              return "";
            });
        } else {
          reject();
        }
      });
    }
  },
  imageResize: {
    parchment: Quill.import("parchment"),
    modules: ["Resize", "DisplaySize"]
  },
  ImageDrop: false
};

const validateImage = file => {
  if (file) {
    const { size } = file;
    const sizeInMb = size / 1024 / 1024;
    if (sizeInMb < MAX_IMAGE_SIZE_ALLOWED) {
      return true;
    } else {
      showImageUploadError();
    }
  }
  return false;
};

const showImageUploadError = () => {
  fileLimitExceedState.setMessage(
    `Image size should not be more than 3MB. Please reduce the file size and try again.`
  );
  fileLimitExceedState.setType("image");
  fileLimitExceedState.setShowPopup(true);
};

const QuilEditor = (props = {}) => {
  const {
    attachments = [],
    entityObj = {},
    pageType = "",
    stageType = "",
    isSubjectFocused = false,
    prefilledValue = "",
    type = "",
    fromTaskPage = false,
    isOutboxPage = false,
    showRewriteAI = false,
    bodyOnChange = () => {},
    setsubjectFocus = () => {},
    setSubject = () => {},
    updateContentCbk = false, // ()=>{}
    placeholder = ""
  } = props || {};

  const handleDragOver = event => {
    event.preventDefault();
  };

  const handleDrop = event => {
    event.preventDefault();
    event.stopPropagation();

    // Show toaster message
    toasterState.setToastMsg(
      "Please use the upload button to add images. Drag and drop is not supported.",
      "warning"
    );
  };

  let reactQuillRef = (fromTaskPage ? taskQuillRef : quillRef) || null;

  const [showVariableCont, setshowVariableCont] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(0);
  const [fileUploading, setFileUploading] = useState(false);

  const bindCustomEvent = () => {
    var customButton = document.querySelector(".ql-variables");
    customButton.addEventListener("click", function (event) {
      event.preventDefault();
      setshowVariableCont(!showVariableCont);
    });
  };

  const optionAction = (value = "") => {
    if (window && window.getSelection()) {
      window.getSelection().deleteFromDocument();
    }
    if (isSubjectFocused) {
      setSubject(value);
    } else if (value?.length) {
      reactQuillRef.insertText(cursorPosition, value);
    }
    setshowVariableCont(false);
  };

  const addLinkTitleTooltip = () => {
    let toolbarElement = document.querySelector(".ql-toolbar .ql-link");
    toolbarElement.setAttribute("title", "Insert a link");
  };

  const attachQuillRefs = (el = "") => {
    // eslint-disable-next-line no-unused-expressions
    if (
      ((fromTaskPage && taskQuillRef === null) ||
        (!fromTaskPage && quillRef === null)) &&
      el &&
      typeof el?.getEditor === "function"
    ) {
      addLinkTitleTooltip();
      if (fromTaskPage) {
        taskQuillRef = el.getEditor();
      } else {
        quillRef = el.getEditor();
      }
      reactQuillRef = fromTaskPage ? taskQuillRef : quillRef;
      reactQuillRef.focus();
    }
  };

  const handleChange = (editorValue, _, source) => {
    if (reactQuillRef) {
      const quillDelta = reactQuillRef.getContents();
      const test = JSON.parse(JSON.stringify(quillDelta));
      const tempCont = document.createElement("div");
      new Quill(tempCont).setContents(test);
      if (editorValue && editorValue.indexOf("image-uploading") === -1) {
        bodyOnChange(tempCont?.innerHTML, source);
      }
    }
  };

  const setMousePosition = () => {
    const range =
      reactQuillRef && reactQuillRef.selection && reactQuillRef.selection;
    const position =
      range && range.savedRange && range.savedRange.index
        ? range.savedRange.index
        : 0;
    setCursorPosition(position);
  };

  const scrollIntoContentView = () => {
    if (reactQuillRef) {
      let scrollingContainer = reactQuillRef?.scrollingContainer;
      scrollingContainer.scrollTop = scrollingContainer.scrollHeight;
    }
  };

  const applyTypewriterEffect = async (objList = {}) => {
    let tempObj = { ops: [] };

    const delayedDirectInsertion = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          reactQuillRef.setContents(tempObj);
          scrollIntoContentView();
          resolve();
        }, 10);
      });
    };

    const delayedInsertion = (obj = {}, insert = "", index = "") => {
      return new Promise(resolve => {
        setTimeout(() => {
          tempObj.ops[index] = { ...obj, insert };
          reactQuillRef.setContents(tempObj);
          scrollIntoContentView();
          resolve();
        }, 10);
      });
    };

    const performInsertion = async (obj = {}, insert = "", index = "") => {
      let text = "";
      for (let letter of insert) {
        text += letter;
        await delayedInsertion(obj, text, index);
      }
    };

    if (
      objList &&
      Object.keys(objList)?.length > 0 &&
      objList?.ops?.length > 0
    ) {
      let tempList = objList?.ops || [];
      if (tempList?.length > 0) {
        for (let index = 0; index < tempList?.length; index++) {
          const ele = tempList?.[index] || {};
          const { insert = "" } = ele || {};
          if (typeof insert === "string" && insert) {
            await performInsertion(ele, insert, index);
          } else {
            tempObj.ops[index] = ele;
            await delayedDirectInsertion(tempObj);
          }
        }
      }
    }
  };

  const applyTypewriteEffectForChatGptContent = async (data = {}) => {
    writingAssistantStoreData.setHideChatGpt(true);
    writingAssistantStoreData.setTypewriteAnimation(false);
    await applyTypewriterEffect(data);
    writingAssistantStoreData.setHideChatGpt(false);
  };

  const prefillData = () => {
    if (reactQuillRef) {
      // quillRef.clipboard.dangerouslyPasteHTML(0, prefilledValue);
      const dom = document.createElement("div");
      dom.innerHTML =
        prefilledValue?.replaceAll(/\s*<div>\s*\t*<\/div>/g, "") || "";
      dom.innerHTML =
        EditorUtils.replaceEmptyContentHtmlWithBreakTag(prefilledValue);
      if (
        dom?.firstChild &&
        prefilledValue &&
        dom?.firstChild?.nodeName !== "#text"
      ) {
        dom.firstChild.insertAdjacentHTML("beforeend", "<div><br></div>");
      }
      if (showRewriteAI) {
        if (fromTaskPage) {
          writingAssistantStoreData.setTaskBodyContent(prefilledValue || "");
        } else {
          writingAssistantStoreData.setBodyContent(prefilledValue || "");
        }
      }
      const constructedDelta =
        reactQuillRef.clipboard.convert(
          fromTaskPage || isOutboxPage
            ? prefilledValue
            : dom?.firstChild?.outerHTML || prefilledValue
        ) || [];

      if (writingAssistantStoreData.typewriteAnimation) {
        applyTypewriteEffectForChatGptContent(constructedDelta);
      } else {
        reactQuillRef.setContents(constructedDelta);
      }
    }
  };

  const handleFocus = () => {
    isSubjectFocused && setsubjectFocus(false);
  };

  const loadAttachmentIcon = () => {
    if (
      ["email", "manualemail", "templates"].includes(stageType?.toLowerCase())
    ) {
      // TEMPLATE - Adding Attachment Icon
      const templateToolbarList = document.querySelectorAll(
        "#templateQuilEditor > div.quill > div.ql-toolbar.ql-snow > span:nth-child(2)"
      );
      // SEQUENCE - Adding Attachment Icon
      const sequenceToolbarList = document.querySelectorAll(
        "#sequenceAutomaticQuilEditor > div.quill > div.ql-toolbar.ql-snow > span:nth-child(2)"
      );
      // REPLY FORWARD - Adding Attachment Icon
      const emailComposeEditorList = document.querySelectorAll(
        "#emailComposeEditor > div.quill > div.ql-toolbar.ql-snow > span:nth-child(2)"
      );
      // PERFORM STANDALONE TASK
      const manualEmailPerformTaskEditorList = document.querySelectorAll(
        ".performTaskManualEmailEditor > div.quill > div.ql-toolbar.ql-snow > span:nth-child(2)"
      );
      // ACCOUNT NOTES
      const accountNotesEditorList = document.querySelectorAll(
        "#accountNotesEditor > div.quill > div.ql-toolbar.ql-snow > span:nth-child(2)"
      );
      if (
        templateToolbarList?.length ||
        sequenceToolbarList?.length ||
        emailComposeEditorList?.length ||
        manualEmailPerformTaskEditorList?.length ||
        accountNotesEditorList?.length
      ) {
        const parent = document.createElement("button");
        parent.setAttribute("id", "attachmentUploadFileDom");
        if (templateToolbarList?.length) {
          templateToolbarList[0].appendChild(parent);
        } else if (sequenceToolbarList?.length) {
          sequenceToolbarList[0].appendChild(parent);
        } else if (emailComposeEditorList?.length) {
          emailComposeEditorList[0].appendChild(parent);
        } else if (manualEmailPerformTaskEditorList?.length) {
          manualEmailPerformTaskEditorList[0].appendChild(parent);
        } else if (accountNotesEditorList?.length) {
          accountNotesEditorList[0].appendChild(parent);
        }
        const attachFileId = document.getElementById("attachmentUploadFileDom");
        ReactDOM.render(
          <FileUpload fromTaskPage={fromTaskPage} />,
          attachFileId
        );
      }
    }
  };

  const loadTracking = () => {
    if (!fromTaskPage && type === "reply") {
      const toolbarTrackingDom = document.querySelectorAll(
        "#emailComposeEditor .quill > div.ql-toolbar.ql-snow > span:last-child"
      );
      if (toolbarTrackingDom?.length) {
        const dom = document.createElement("span");
        dom.setAttribute("id", "toolbarTracking");
        toolbarTrackingDom[0].appendChild(dom);
        const addToolbarTrackingDom =
          document.getElementById("toolbarTracking");
        ReactDOM.render(
          <ToolbarTrackingIcon type={type} />,
          addToolbarTrackingDom
        );
      }
    }
  };

  const loadRewriteAi = () => {
    if (showRewriteAI) {
      const rewriteAiDom = document.querySelector(".quill");
      if (rewriteAiDom) {
        const dom = document.createElement("span");
        dom.setAttribute("id", "chatGptEditorSection");
        dom.setAttribute("class", "chatGptEditorSection");
        rewriteAiDom.appendChild(dom);
        const addRewriteAIDom = document.getElementById("chatGptEditorSection");
        let attachmentHeight =
          document.getElementById("editorFileAttachment")?.clientHeight || 0;
        addRewriteAIDom.style.bottom = 40 + attachmentHeight;
        ReactDOM.render(
          <RewriteAi
            updateContentCbk={updateContentCbk}
            pageType={pageType}
            fromTaskPage={fromTaskPage}
            editorRef={reactQuillRef}
          />,
          addRewriteAIDom
        );
      }
    }
  };

  const handleRefAction = (el = "") => {
    el && attachQuillRefs(el);
  };

  const loadPerformTaskFileUploadingLoader = () => {
    if (fromTaskPage) {
      const quilDom = document.querySelectorAll("#reactEditor .quill");
      if (quilDom?.length) {
        const dom = document.createElement("div");
        dom.setAttribute("id", "performTaskFileUploadingLoader");
        quilDom[0].appendChild(dom);
        const fileUploadingLoaderDOm = document.getElementById(
          "performTaskFileUploadingLoader"
        );
        ReactDOM.render(
          <PerformTaskFileUploadingLoader />,
          fileUploadingLoaderDOm
        );
      }
    }
  };

  const loadPerformTaskFileAttachments = () => {
    if (fromTaskPage) {
      const attachmentDom = document.querySelectorAll(
        "#reactEditor .quill > div.ql-container"
      );
      if (attachmentDom?.length) {
        const dom = document.createElement("div");
        dom.setAttribute("id", "performTaskFileAttachment");
        attachmentDom[0].appendChild(dom);
        const addAttachmentDom = document.getElementById(
          "performTaskFileAttachment"
        );
        ReactDOM.render(
          <PerformTaskFileAttachment attachments={attachments} />,
          addAttachmentDom
        );
      }
    }
  };

  useEffect(() => {
    bindCustomEvent();
    loadAttachmentIcon();
    loadRewriteAi();
    !isOutboxPage && loadTracking();
    if (fromTaskPage) {
      loadPerformTaskFileAttachments();
      loadPerformTaskFileUploadingLoader();
    }
    const editorElement = document.querySelector(".ql-container");
    if (editorElement) {
      editorElement.addEventListener("dragover", handleDragOver);
      editorElement.addEventListener("drop", handleDrop);
    }
    return () => {
      reactQuillRef = null;
      if (fromTaskPage) {
        writingAssistantStoreData.setTaskBodyContent("");
        taskQuillRef = null;
      } else {
        writingAssistantStoreData.setInputValue({ content: "", subject: "" });
        writingAssistantStoreData.setBodyContent("");
        quillRef = null;
      }
      if (editorElement) {
        editorElement.removeEventListener("dragover", handleDragOver);
        editorElement.removeEventListener("drop", handleDrop);
      }
    };
  }, []);

  useEffect(() => {
    prefillData();
  }, [prefilledValue]);

  useEffect(() => {
    setFileUploading(fileAttachmentStore?.fileUploadingLoader || false);
  }, [fileAttachmentStore?.fileUploadingLoader]);

  return (
    <>
      {!fromTaskPage && showVariableCont && (
        <TokenVariable
          tokenCbk={optionAction}
          closeCbk={() => setshowVariableCont(false)}
          pageType={pageType}
        />
      )}
      <ReactQuill
        placeholder={placeholder}
        modules={modules}
        onChange={handleChange}
        onFocus={e => handleFocus(e)}
        onChangeSelection={e => setMousePosition(e)}
        spellcheck={false}
        theme="snow"
        ref={el => handleRefAction(el)}
      />
      {!fromTaskPage && attachments?.length > 0 && (
        <FileAttachmentList
          attachments={attachments}
          entityObj={entityObj}
          fromTaskPage={fromTaskPage}
        />
      )}
      {fileUploading && !fromTaskPage && <FileUploadingLoader />}
    </>
  );
};

export default observer(QuilEditor);
export { QuilEditor };
