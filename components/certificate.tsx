import React from 'react'

import { Award } from "lucide-react";
import Link from "next/link";

function Certificate({title, issuer, link="#"}: {title?: string; issuer?: string, link: string}) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-3 hover:underline "
    >
      <Award className="text-slate-700 mt-1 flex-shrink-0" size={24} />
      <div>
        <h3 className="text-slate-900 mb-2">
         {title}
        </h3>
        <p className="text-slate-600">Issued by {issuer}</p>
      </div>
    </Link>
  );
}

export default Certificate