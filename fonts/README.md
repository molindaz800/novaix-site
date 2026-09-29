# Homepage fonts

Self-hosted Latin subsets for Spanish and English, sourced from the official Google Fonts CSS API. See SOURCES.json for exact URLs, bytes and SHA256; adjacent OFL files preserve licensing.

- Instrument Sans: medium500 only, 17,324bytes.
- Inter: roman400–600 variable range, 35,420bytes.

Generated with fontTools.varLib.instancer to retain only the used range; WOFF2 output. No commercial Neue Montreal files or unused Newsreader assets are included.
CSS font-face declarations, matching fallback metrics and semantic role tokens are centralized in /home-type.css. Only homepages load that stylesheet; existing landing type is unaffected.
