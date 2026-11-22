#!/usr/bin/env python3
"""Build Kotoba into one self-contained HTML file (dist/index.html).
Usage: python3 build.py
Source layout: src/head.html (+ css/*.css inlined) -> src/js/*.js (sorted by name) -> src/tail.html"""
import glob,os,re
R=os.path.dirname(os.path.abspath(__file__))
head=open(f'{R}/src/head.html').read()
css=''.join(open(p).read()+'\n' for p in sorted(glob.glob(f'{R}/src/css/*.css')))
head=head.replace('</style>',css+'</style>',1)
js=''.join(open(p).read() for p in sorted(glob.glob(f'{R}/src/js/*.js')))
tail=open(f'{R}/src/tail.html').read()
out=head+"<script>\n(function(){\n'use strict';\n"+js+"\n})();\n"+tail
os.makedirs(f'{R}/dist',exist_ok=True)
open(f'{R}/dist/index.html','w').write(out)
m=re.search(r'<script>(.*?)</script>',out,re.S)
open(f'{R}/dist/.check.js','w').write(m.group(1))
if '--trial' in __import__('sys').argv:
    trial=out.replace('/*FULL*/true','false').replace('<title>Kotoba JLPT</title>','<title>Kotoba JLPT Trial</title>')
    assert trial!=out
    open(f'{R}/dist/kotoba-trial.html','w').write(trial)
print('built',len(out)//1024,'KB')

# standalone page for GitHub Pages / PWA / Play Store (docs/index.html)
wrap_head=('<!doctype html><html lang="en"><head><meta charset="utf-8">'
 '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
 '<meta name="theme-color" content="#c2331f"><meta name="description" content="Free, open-source JLPT study app for N5 to N1">'
 '<link rel="manifest" href="manifest.webmanifest"><link rel="icon" href="icon-192.png"><link rel="apple-touch-icon" href="icon-192.png">'
 '<style>html{color-scheme:light}body{margin:0;font:14px system-ui,sans-serif}[hidden]{display:none!important}</style></head><body>')
wrap_tail=("<script>if('serviceWorker' in navigator&&/^https?:/.test(location.protocol))addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){})})</script></body></html>")
os.makedirs(f'{R}/docs',exist_ok=True)
open(f'{R}/docs/index.html','w').write(wrap_head+out+wrap_tail)
print('standalone docs/index.html written')
