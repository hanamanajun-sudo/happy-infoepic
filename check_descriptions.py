import os, re, glob, sys

posts_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'src', 'content', 'posts')
os.chdir(posts_dir)
files = sorted(glob.glob('*.md'))
candidates = []

for f in files:
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()
    m = re.search(r'^description:\s*"(.*?)"', content, re.MULTILINE)
    if m:
        desc = m.group(1)
        total_len = len(desc)
        if total_len < 30:
            candidates.append((f, desc, total_len))
    else:
        candidates.append((f, '(no desc)', 0))

print(f"{'File':35s} {'Description':55s} {'Len':5s}")
print('-' * 100)
for f, d, tl in sorted(candidates, key=lambda x: x[2]):
    desc_display = d[:50] + '..' if len(d) > 50 else d
    print(f'{f:35s} {desc_display:55s} {tl:5d}')

print(f'\nTotal candidates (description < 30 chars): {len(candidates)}')
