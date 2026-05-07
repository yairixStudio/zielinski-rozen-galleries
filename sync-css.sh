#!/bin/bash
# Sync CSS into all HTML files. Run after editing css/main.css.
set -e
cd "$(dirname "$0")"
python3 <<'PY'
import re, pathlib
root = pathlib.Path('.')
css = (root / 'css' / 'main.css').read_text(encoding='utf-8')
inline_block = f'<style>\n{css}\n</style>'
for f in root.glob('*.html'):
    if f.name == 'test-style.html': continue
    content = f.read_text(encoding='utf-8')
    new_content, n = re.subn(r'<style>[\s\S]*?</style>', lambda m: inline_block, content, count=1)
    if n > 0:
        f.write_text(new_content, encoding='utf-8')
        print(f"  ✓ {f.name}")
print("Done.")
PY
