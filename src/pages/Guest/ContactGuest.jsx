import { useState } from "react";
import Breadcrumb from "../../components/ui/Breadcrumb";
import contactIcon from "../../assets/icons/contactIcon.svg";

export default function ContactGuest() {
  const [subject, setSubject] = useState("Regarding Posting a Job");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanedEmail = email.trim().toLowerCase();

    if (!cleanedEmail) {
      setError("This field is required");
      return;
    }

    setError("");

    const payload = {
      subject,
      email: cleanedEmail,
      message,
    };

    console.log(payload);
  };

  return (
    <section className="px-6 pb-20">
      {/* Breadcrumb */}
      <div className="hidden sm:block mb-10">
        <Breadcrumb sectionTo="/" current="Contact" />
      </div>

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <img src={contactIcon} alt="contact icon" className="w-12 mb-4" />

        <h1 className="font-recoleta text-3xl md:text-4xl font-bold">
          Contact
        </h1>

        <p className="mt-3 max-w-[520px] text-gray-600">
          Please reach out to us if you have any questions or you need our
          assistance with something.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
        {/* Inputs row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Subject */}
          <div>
            <label className="block mb-2 text-sm font-medium">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-gray-200 rounded-md px-4 py-3 outline-none"
              placeholder="Regarding Posting a Job"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium">Your email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-200 rounded-md px-4 py-3 outline-none"
              placeholder="abebe@gmail.com"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
        </div>

        {/* Message */}
        {/* Message */}
        <div>
          <label className="block mb-2 text-sm font-medium">Message</label>

          <div className="relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value.slice(0, 512))}
              className="
        w-full bg-gray-200 rounded-md
        px-4 py-4 pb-8
        outline-none resize-none h-48
      "
              placeholder="Write your message here..."
            />

            {/* Counter */}
            <span className="absolute bottom-2 right-3 text-xs text-gray-500">
              {message.length}/512
            </span>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#8967B3] text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Send message
          </button>
        </div>
      </form>
    </section>
  );
}
