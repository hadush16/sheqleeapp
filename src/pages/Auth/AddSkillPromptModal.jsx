import { useEffect, useState } from "react";
import Modal from "../../components/ui/Modal";
import Button from "../../components/ui/Button";

const SKILL_LEVELS = [
  { label: "Junior", value: 1 },
  { label: "Intermediate", value: 2 },
  { label: "Advanced", value: 3 },
  { label: "Expert", value: 4 },
  { label: "Master", value: 5 },
];

export default function AddSkillPromptModal({ isOpen, onClose, onAddSkill }) {
  const [skillName, setSkillName] = useState("");
  const [level, setLevel] = useState("");
  const [isDirty, setIsDirty] = useState(false);

  // reset when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setSkillName("");
      setLevel("");
      setIsDirty(false);
    }
  }, [isOpen]);

  const handleSkillChange = (e) => {
    setSkillName(e.target.value);
    setIsDirty(true);
  };

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
    setIsDirty(true);
  };

  const handleSubmit = () => {
    if (!skillName.trim() || !level) return;

    onAddSkill({
      name: skillName.trim(),
      level: Number(level),
    });

    onClose();
  };

  const isValid = skillName.trim() && level;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6 text-center">
        {/* TITLE */}
        <h2 className="text-xl font-semibold">Add a new skill</h2>

        {/* SKILL NAME */}
        <input
          type="text"
          placeholder="Objective-C"
          value={skillName}
          onChange={handleSkillChange}
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

        {/* SKILL LEVEL */}
        <select
          value={level}
          onChange={handleLevelChange}
          className="
            w-full
            h-[48px]
            px-4
            rounded-lg
            bg-[#E5E5E5]
            outline-none
            text-sm
          "
        >
          <option value="" disabled>
            Skill level
          </option>

          {SKILL_LEVELS.map((l) => (
            <option key={l.value} value={l.value}>
              {l.label}
            </option>
          ))}
        </select>

        {/* ACTION */}
        <Button
          disabled={!isValid}
          onClick={handleSubmit}
          className={`
    w-[60%]
    h-[44px]
    rounded-lg
    text-sm
    transition-colors
  

    ${isDirty ? "bg-[#8967B3] text-white" : "bg-black text-white"}

    ${!isValid ? "!opacity-100 disabled:!opacity-100 bg-black text-white cursor-not-allowed" : ""}
  `}
        >
          Add skill
        </Button>
      </div>
    </Modal>
  );
}
