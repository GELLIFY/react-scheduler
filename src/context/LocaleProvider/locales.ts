import { en } from "@/locales/en";
import { it } from "@/locales/it";
import { LocaleType } from "./types";

export const locales: LocaleType[] = [
  {
    id: "en",
    name: "ENGLISH",
    lang: en,
    translateCode: "en-GB"
  },
  {
    id: "it",
    name: "ITALIAN",
    lang: it,
    translateCode: "itit-IT"
  }
];
