"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useCallback, useRef } from "react";

interface DoctorsSearchProps {
  onSearch: (term: string) => void;
}

function useDebounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
) {
  const timeoutRef = useRef<NodeJS.Timeout>();

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
}

export function DoctorsSearch({ onSearch }: DoctorsSearchProps) {
  const debouncedSearch = useDebounce((term: string) => {
    onSearch(term);
  }, 300);

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        placeholder="Search by doctor name, specialty, location..."
        className="pl-10 py-6 text-lg"
        onChange={(e) => debouncedSearch(e.target.value)}
      />
    </div>
  );
}
