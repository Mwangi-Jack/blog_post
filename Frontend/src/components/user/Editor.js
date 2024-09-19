// Editor.js
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor({ content, setContent, handleChange }) {

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "color", "image"],
      [{ "code-block": true }],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "indent",
    "image",
    "code-block",
    "color",
  ];

  return (
    <div className="">
      <div className="editor-container">
        <ReactQuill
          value={content}
          name={'content'}
          onChange={setContent}
          modules={modules}
          formats={formats}
          placeholder="Write your blog here..."
          className="h-[29rem] mt-6 md:mt-0"
        />
      </div>
    </div>
  );
}

export default Editor;
