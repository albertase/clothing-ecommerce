import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Albertase Shop All rights reserved</p>
      <p className="icons">
        <Link href="https://web.facebook.com/">
        <AiFillFacebook />
        </Link>
        <Link href="https://twitter.com/UkaegbuAlbert">
        <AiOutlineTwitter />
        </Link>
      </p>
    </div>
  )
}

export default Footer