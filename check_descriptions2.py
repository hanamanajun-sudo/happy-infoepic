import os, re, glob, sys

# Use the correct posts directory
posts_dir = r"C:\Users\hanam\OneDrive\바탕 화면\클로드cowork\happy.infoepic\happy-site\src\content\posts"
files = sorted(glob.glob(os.path.join(posts_dir, '*.md')))
candidates = []

for f in files:
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()
    m = re.search(r'^description:\s*"(.*?)"', content, re.MULTILINE)
    if m:
        desc = m.group(1)
        total_len = len(desc)
        if total_len < 30:
            candidates.append((os.path.basename(f), desc, total_len))

print(f"{'File':35s} {'Description':55s} {'Len':5s}")
print('-' * 100)
for f, d, tl in sorted(candidates, key=lambda x: x[2]):
    desc_display = d[:50] + '..' if len(d) > 50 else d
    print(f'{f:35s} {desc_display:55s} {tl:5d}')

print(f'\nTotal candidates (description < 30 chars): {len(candidates)}')
