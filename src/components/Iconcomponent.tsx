import React from "react";
import type { FC } from "react";

interface SampleProps {
  color: string;
  content: any;
}

export const Icon: FC<SampleProps> = ({ color, content }) => content;
