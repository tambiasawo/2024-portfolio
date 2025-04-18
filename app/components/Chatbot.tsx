"use client";
import React from "react";
import Script from "next/script";

const ChatbotSnippet = () => {
  return (
    <>
      <Script
        id="chatbase"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
        window.chatbaseConfig = {
          chatbotId: "lrarssCbUBpIr0MkaL1Rc"
        }
      `,
        }}
      />
      <Script
        src="https://www.chatbase.co/embed.min.js"
        strategy="lazyOnload"
      />
    </>
  );
};

export default ChatbotSnippet;
