import os, re, glob, json

posts_dir = r"C:\Users\hanam\OneDrive\바탕 화면\클로드cowork\happy.infoepic\happy-site\src\content\posts"
files = sorted(glob.glob(os.path.join(posts_dir, '*.md')))
results = []

for f in files:
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()
    
    # Extract description
    m = re.search(r'^description:\s*"(.*?)"', content, re.MULTILINE)
    if not m:
        continue
    desc = m.group(1)
    if len(desc) >= 20:
        continue
    
    # Extract title
    m2 = re.search(r'^title:\s*"(.*?)"', content, re.MULTILINE)
    title = m2.group(1) if m2 else "(no title)"
    
    # Extract tags
    m3 = re.search(r'^tags:\s*\[(.*?)\]', content, re.MULTILINE)
    tags = m3.group(1) if m3 else ""
    
    # Extract first meaningful paragraph after frontmatter
    # Remove frontmatter
    body = re.sub(r'^---.*?^---\s*', '', content, flags=re.MULTILINE | re.DOTALL)
    # Remove empty lines and get first non-empty paragraph
    body = body.strip()
    # Get first 200 chars as content sample
    first_content = body[:300].strip()
    
    results.append({
        'file': os.path.basename(f),
        'title': title,
        'desc_len': len(desc),
        'old_desc': desc,
        'tags': tags,
        'first_content': first_content
    })

print(json.dumps(results, ensure_ascii=False, indent=2))
