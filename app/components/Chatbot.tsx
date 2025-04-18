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
          chatbotId: "${process.env.NEXT_PUBLIC_CHATBOTID}"
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
