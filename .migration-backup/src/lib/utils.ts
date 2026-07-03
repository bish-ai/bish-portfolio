import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export function isExternalLink(url: string): boolean {
  return url.startsWith("http") || url.startsWith("https");
}

export function truncateText(text: string, length: number): string {
  return text.length > length ? `${text.substring(0, length)}...` : text;
}

export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function formatDuration(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = endDate === "Present" ? new Date() : new Date(endDate);
  
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (years === 0) {
    return `${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`;
  }
  
  return `${years} year${years !== 1 ? "s" : ""}${remainingMonths > 0 ? ` ${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}` : ""}`;
}
