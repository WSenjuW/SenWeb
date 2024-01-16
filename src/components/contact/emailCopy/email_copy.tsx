import { MdEmail } from "react-icons/md";
import { LuClipboardCopy } from "react-icons/lu";
import { useRef } from "react";
import "./email_copy.css";

export default function EmailComponent() {
  const copyRef = useRef<HTMLParagraphElement>(null);

  function btn_email_click() {
    const keyFrame1 = [
      { transform: "translateY(0)" },
      { transform: "translateY(30px)" },
      { transform: "translateY(30px)" },
      { transform: "translateY(30px)" },
      { transform: "translateY(30px)" },
      { transform: "translateY(30px)" },
      { transform: "translateY(0)" },
    ];

    if (copyRef.current != null) {
      copyRef.current.animate(keyFrame1, {
        duration: 700,
        iterations: 1,
      });

      navigator.clipboard.writeText("wsenjuw@gmail.com");
    }
  }

  return (
    <div id="email-box">
      <MdEmail />
      wsenjuw@gmail.com
      <button id="btn-copy-email" onClick={() => btn_email_click()}>
        <LuClipboardCopy />
      </button>
      <p id="copied" ref={copyRef}>
        Copied
      </p>
    </div>
  );
}
