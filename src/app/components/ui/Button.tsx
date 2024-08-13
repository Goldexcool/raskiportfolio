"use client";
import React from "react";
import { IconClipboard } from "@tabler/icons-react";
import { cn } from "../../lib/utils";

export const ButtonsCard = ({
    children,
    className,
    text,
    onClick,
}: {
    children?: React.ReactNode;
    className?: string;
    text: string;
    onClick?: () => void;
}) => {
    return (
        <button className="relative inline-flex h-12 overflow-hidden rounded-[10px] p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full text-xl cursor-pointer items-center justify-center rounded-[10px] bg-slate-950 px-3 font-medium text-white backdrop-blur-3xl">
                {text}
            </span>
        </button>
    );
};
