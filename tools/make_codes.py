#!/usr/bin/env python3
"""Make Kotoba access codes. Usage: python3 tools/make_codes.py 20
Keep LIC_SALT identical to src/js/05-config.js. Give each buyer one code."""
import sys,secrets
SALT='kotoba-2026-sk';AL='ABCDEFGHJKMNPQRSTUVWXYZ23456789'
def h(s):
    x=2166136261
    for c in s:
        x^=ord(c);x=(x*16777619)&0xFFFFFFFF
    o=''
    for _ in range(4):
        o+=AL[x%len(AL)];x//=len(AL)
    return o
n=int(sys.argv[1]) if len(sys.argv)>1 else 10
for _ in range(n):
    a=''.join(secrets.choice(AL) for _ in range(4));print(f'KOTO-{a}-{h(SALT+a)}')
