import re

files = [
    r'c:\Users\hrish\.antigravity\Soft7\src\Pages\Broadcast\Broadcast.css',
    r'c:\Users\hrish\.antigravity\Soft7\src\Pages\Chatbot\Chatbot.css',
    r'c:\Users\hrish\.antigravity\Soft7\src\Pages\Crm\Crm.css'
]

sections = [
    'features-section', 'three-steps-section', 'stats-strip', 'workflow-section', 
    'faq-section-new', 'footer-simple', 'analytics-preview', 'safety-roadmap', 
    'use-cases', 'ai-composer-section', 'template-gallery'
]

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'Broadcast' in file:
        content = re.sub(r'(\.broadcast-redesign\s*\{[\s\S]*?background:\s*)linear-gradient\([^)]+\)', 
                         r'\g<1>linear-gradient(135deg, #dbeafe 0%, #eff6ff 50%, #bfdbfe 100%)', content, count=1)
    elif 'Chatbot' in file:
        content = re.sub(r'(\.chatbot-redesign\s*\{[\s\S]*?background:\s*)linear-gradient\([^)]+\)', 
                         r'\g<1>linear-gradient(135deg, #f3e8ff 0%, #faf5ff 50%, #e9d5ff 100%)', content, count=1)
    elif 'Crm' in file:
        content = re.sub(r'(\.crm-redesign\s*\{[\s\S]*?background:\s*)linear-gradient\([^)]+\)', 
                         r'\g<1>linear-gradient(135deg, #fce7f3 0%, #fdf2f8 50%, #fbcfe8 100%)', content, count=1)

    for section in sections:
        # Find .section { ... background: xxx; ... }
        # Non-greedy match inside the curly braces to avoid spilling into other rules
        pattern = r'(\.' + section + r'\s*\{(?:[^}](?!background:))*?)background:\s*[^;]+;'
        content = re.sub(pattern, r'\1background: transparent;', content)
        
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
print('Done!')
