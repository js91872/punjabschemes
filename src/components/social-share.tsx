"use client";

import { useState } from "react";

type SocialShareProps = {
  title: string;
  url: string;
};

export function SocialShare({ title, url }: SocialShareProps) {
  const [status, setStatus] = useState("More options");
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedMessage = encodeURIComponent(`${title}\n${url}`);
  const links = [
    { name: "WhatsApp", className: "whatsapp", href: `https://wa.me/?text=${encodedMessage}` },
    { name: "Facebook", className: "facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { name: "X", className: "x", href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}` },
    { name: "LinkedIn", className: "linkedin", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
  ];

  async function shareOrCopy() {
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setStatus("Link copied");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setStatus("Copy the page address");
    }
  }

  return (
    <aside className="social-share" aria-labelledby="share-heading">
      <div>
        <p className="eyebrow green">Help someone find this guide</p>
        <h2 id="share-heading">Share this scheme</h2>
      </div>
      <div className="share-actions">
        {links.map((link) => (
          <a className={`share-button ${link.className}`} href={link.href} key={link.name} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${link.name}`}>
            <span aria-hidden="true">{link.name === "WhatsApp" ? "W" : link.name === "Facebook" ? "f" : link.name === "LinkedIn" ? "in" : "X"}</span>
            {link.name}
          </a>
        ))}
        <button className="share-button more" type="button" onClick={shareOrCopy}><span aria-hidden="true">↗</span>{status}</button>
      </div>
      <p className="share-privacy">Sharing opens the selected service only after you choose it. PunjabSchemes.com does not load social-media trackers on this page.</p>
    </aside>
  );
}
