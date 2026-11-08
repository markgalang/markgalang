import { readFileSync } from 'node:fs';
import { describe, it, expect } from 'vitest';

describe('Touch targets and manifest assets', () => {
  it('gives toolkit and social links at least 44px targets at every breakpoint', () => {
    const css = readFileSync(`${process.cwd()}/src/styles.css`, 'utf8');
    // This shared rule intentionally follows all breakpoint overrides.
    const targetRule = css.slice(css.lastIndexOf('.text-link,.social-links a{'));
    expect(targetRule).toContain('display:inline-flex');
    expect(targetRule).toContain('align-items:center');
    expect(targetRule).toContain('min-height:44px');
    expect(targetRule).toContain('min-width:44px');
    expect(css).toContain('.social-links{display:flex;flex-wrap:wrap;gap:22px');
  });
  it('declares the original logo’s actual PNG dimensions', () => {
    const manifest = JSON.parse(readFileSync(`${process.cwd()}/public/manifest.json`, 'utf8'));
    for (const icon of manifest.icons) {
      const bytes = readFileSync(`${process.cwd()}/public${icon.src}`);
      expect(bytes.subarray(1, 4).toString()).toBe('PNG');
      const width = bytes.readUInt32BE(16);
      const height = bytes.readUInt32BE(20);
      expect(icon.sizes).toBe(`${width}x${height}`);
      expect(icon.type).toBe('image/png');
    }
  });
});
