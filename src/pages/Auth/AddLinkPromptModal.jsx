import { useEffect, useState } from "react";
import Modal from "../../components/ui/Modal";
import Button from "../../components/ui/Button";

export default function AddLinkPromptModal({ isOpen, onClose, onAddLink }) {
  const [linkName, setLinkName] = useState("");
  const [url, setUrl] = useState("");
  const [isDirty, setIsDirty] = useState(false);

  // Reset modal state when closed
  useEffect(() => {
    if (!isOpen) {
      setLinkName("");
      setUrl("");
      setIsDirty(false);
    }
  }, [isOpen]);

  const handleNameChange = (e) => {
    setLinkName(e.target.value);
    setIsDirty(true);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    setIsDirty(true);
  };

  const isValid = linkName.trim().length > 0 && url.trim().length > 0;

  const handleSubmit = () => {
    if (!isValid) return;

    onAddLink({
      name: linkName.trim(),
      url: url.trim(),
    });

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6 text-center">
        {/* TITLE */}
        <h2 className="text-xl font-semibold">Add a new link</h2>

        {/* LINK NAME */}
        <input
          type="text"
          placeholder="Link name (eg. GitHub or LinkedIn)"
          value={linkName}
          onChange={handleNameChange}
          className="
            w-full
            h-[48px]
            px-4
            rounded-lg
            bg-[#E5E5E5]
            outline-none
            text-sm
          "
        />

        {/* URL */}
        <input
          type="url"
          placeholder="URL"
          value={url}
          onChange={handleUrlChange}
          className="
            w-full
            h-[48px]
            px-4
            rounded-lg
            bg-[#E5E5E5]
            outline-none
            text-sm
          "
        />

        {/* ACTION BUTTON */}
        <Button
          disabled={!isValid}
          onClick={handleSubmit}
          className={`
            w-[60%]
            h-[44px]
            rounded-[11px]
            text-sm
            transition-colors
            font-medium

            ${isDirty ? "bg-[#8967B3] text-white" : "bg-black text-white"}

            ${!isValid && "!opacity-100 disabled:!opacity-100 bg-black text-white cursor-not-allowed"}
          `}
        >
          Add link
        </Button>
      </div>
    </Modal>
  );
}
