import React from "react";
import Link from "next/link";
import { Badge } from "primereact/badge";

export default function header() {
  return (
    <div className="header">
      <div className="header__main">
        <div className="header__logo">Cv Generator</div>
        <div className="header__links">
          <div className="btn__secondary">
            <div className="coming__soon">
              <Badge value="coming soon" severity="danger"></Badge>
            </div>
            Cover Letter
          </div>
          <Link className="btn__primary" href="/generator">
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
