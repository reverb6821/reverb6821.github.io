"use client";
import * as React from 'react';
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const isThemeDark = useSelector((content: RootState) => content.theme.isThemeDark) || null;
    return <div className={`${isThemeDark ? "dark" : ""} bg-slate-200 dark:bg-slate-600`}>{children}</div>;
  }
  