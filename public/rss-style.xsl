<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html xmlns="http://www.w3.org/1999/xhtml">
<head><meta charset="utf-8"/><title>해피로그 RSS 피드</title>
<style>
body{font-family:-apple-system,sans-serif;max-width:700px;margin:2rem auto;padding:1rem;background:#FFF8EE;color:#2B2118;}
h1{font-size:1.5rem;color:#FF4F81;}
ul{list-style:none;padding:0;}
li{margin:1rem 0;padding:1rem;background:#fff;border-radius:12px;border:1px solid #F0E3D2;}
a{color:#E8386A;text-decoration:none;}
a:hover{text-decoration:underline;}
.date{font-size:0.8rem;color:#8A7C6D;}
</style>
</head>
<body>
<h1>📡 해피로그 RSS 피드</h1>
<ul><xsl:for-each select="rss/channel/item">
<li>
<a href="{link}"><xsl:value-of select="title"/></a>
<div class="date"><xsl:value-of select="pubDate"/></div>
</li>
</xsl:for-each></ul>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
