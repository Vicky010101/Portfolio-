# CureQueue Link Testing Guide

Quick guide to test the clickable project card functionality.

## 🚀 Quick Test

```bash
# Start the app
npm start

# Open browser to http://localhost:3000
# Scroll to Projects section
# Click on CureQueue card
# Verify new tab opens with: https://cure-queue-cyan.vercel.app/
```

## ✅ Detailed Testing

### 1. Visual Appearance Test

**CureQueue Card:**
- [ ] Card displays normally
- [ ] No underline on text
- [ ] No color change indicating link
- [ ] Looks identical to other cards
- [ ] Icon displays correctly
- [ ] Text is readable

**Expected:** Card should look exactly the same as before, no visual indication it's a link except cursor change.

### 2. Hover Behavior Test

**Hover over CureQueue card:**
- [ ] Cursor changes to pointer
- [ ] Card lifts up (translateY animation)
- [ ] Shadow becomes more prominent
- [ ] Transition is smooth
- [ ] Same hover effect as other cards

**Expected:** Hover effects should be identical to other project cards.

### 3. Click Functionality Test

**Click on CureQueue card:**
- [ ] New tab opens
- [ ] URL is: https://cure-queue-cyan.vercel.app/
- [ ] Original tab stays on portfolio
- [ ] No page reload on original tab
- [ ] No console errors

**Expected:** New tab opens with deployed project, original tab unchanged.

### 4. Click Area Test

**Click different parts of the card:**
- [ ] Click on icon area → Opens link
- [ ] Click on title → Opens link
- [ ] Click on description → Opens link
- [ ] Click on tech tags → Opens link
- [ ] Click on card border → Opens link

**Expected:** Entire card should be clickable, not just specific areas.

### 5. Other Projects Test

**Test non-linked projects:**
- [ ] GlamRents card NOT clickable
- [ ] Data Analytics card NOT clickable
- [ ] Healthcare AI card NOT clickable
- [ ] Hover effects still work on all
- [ ] No cursor pointer on non-linked cards

**Expected:** Only CureQueue should be clickable.

### 6. Filter Test

**Test with different filters:**

**"All" filter:**
- [ ] CureQueue card visible
- [ ] Card is clickable
- [ ] Opens correct link

**"Full-Stack" filter:**
- [ ] CureQueue card visible
- [ ] Card is clickable
- [ ] Opens correct link

**"AI/ML" filter:**
- [ ] CureQueue card visible
- [ ] Card is clickable
- [ ] Opens correct link

**"Data" filter:**
- [ ] CureQueue card NOT visible
- [ ] Other cards display correctly

**Expected:** CureQueue remains clickable in all filters where it appears.

### 7. Responsive Test

**Desktop (>990px):**
- [ ] Card displays in 2-column grid
- [ ] Clickable area works
- [ ] Hover effects work
- [ ] Link opens in new tab

**Tablet (680px - 990px):**
- [ ] Card displays in 1-column grid
- [ ] Clickable area works
- [ ] Hover effects work
- [ ] Link opens in new tab

**Mobile (<680px):**
- [ ] Card displays full width
- [ ] Tap opens link
- [ ] New tab opens
- [ ] No accidental clicks

**Expected:** Functionality works on all screen sizes.

### 8. Browser Test

**Chrome:**
- [ ] Link works
- [ ] New tab opens
- [ ] No console errors
- [ ] Hover effects smooth

**Firefox:**
- [ ] Link works
- [ ] New tab opens
- [ ] No console errors
- [ ] Hover effects smooth

**Safari:**
- [ ] Link works
- [ ] New tab opens
- [ ] No console errors
- [ ] Hover effects smooth

**Edge:**
- [ ] Link works
- [ ] New tab opens
- [ ] No console errors
- [ ] Hover effects smooth

**Expected:** Works consistently across all browsers.

### 9. Security Test

**Inspect the link element:**
- [ ] `target="_blank"` attribute present
- [ ] `rel="noopener noreferrer"` attribute present
- [ ] No security warnings in console
- [ ] New tab doesn't have access to opener

**Expected:** Security attributes properly applied.

### 10. Accessibility Test

**Keyboard navigation:**
- [ ] Tab to CureQueue card
- [ ] Card receives focus
- [ ] Focus outline visible
- [ ] Enter key opens link
- [ ] Space key opens link

**Screen reader:**
- [ ] Card announced as link
- [ ] Title is readable
- [ ] Description is readable
- [ ] "Opens in new window" announced

**Expected:** Fully accessible via keyboard and screen readers.

## 🐛 Common Issues & Solutions

### Issue: Link doesn't open
**Check:**
- Browser popup blocker settings
- Console for JavaScript errors
- Network connection
- URL is correct in code

### Issue: Opens in same tab
**Check:**
- `target="_blank"` is present
- Browser settings
- No JavaScript preventing default

### Issue: Card styling changed
**Check:**
- `.project-link` CSS is applied
- No conflicting styles
- `color: inherit` working

### Issue: Hover effects broken
**Check:**
- `.project:hover` CSS still applied
- Transition properties intact
- No CSS specificity issues

### Issue: Other cards affected
**Check:**
- Only CureQueue has `link` property
- Conditional rendering working
- No global style changes

## 📊 Test Results Template

```
Date: ___________
Tester: ___________
Browser: ___________
Device: ___________

Visual Appearance:     [ ] Pass [ ] Fail
Hover Behavior:        [ ] Pass [ ] Fail
Click Functionality:   [ ] Pass [ ] Fail
Click Area:            [ ] Pass [ ] Fail
Other Projects:        [ ] Pass [ ] Fail
Filter Test:           [ ] Pass [ ] Fail
Responsive:            [ ] Pass [ ] Fail
Browser Compatibility: [ ] Pass [ ] Fail
Security:              [ ] Pass [ ] Fail
Accessibility:         [ ] Pass [ ] Fail

Issues Found:
1. ___________
2. ___________
3. ___________

Overall Status: [ ] Pass [ ] Fail

Notes:
___________
```

## 🎯 Success Criteria

All tests pass when:
- ✅ CureQueue card is fully clickable
- ✅ Opens https://cure-queue-cyan.vercel.app/ in new tab
- ✅ Original tab remains on portfolio
- ✅ Card appearance unchanged
- ✅ Hover effects work identically
- ✅ Other cards remain non-clickable
- ✅ Works on all devices and browsers
- ✅ Security attributes present
- ✅ Accessible via keyboard
- ✅ No console errors

## 🚀 Quick Verification Commands

```bash
# Start dev server
npm start

# Open in browser
# Windows
start http://localhost:3000

# Mac
open http://localhost:3000

# Linux
xdg-open http://localhost:3000

# Build for production
npm run build

# Test production build
npx serve -s build
```

## 📝 Manual Test Steps

1. **Open portfolio**
   - Navigate to http://localhost:3000

2. **Scroll to Projects section**
   - Should see 4 project cards

3. **Locate CureQueue card**
   - First card in the grid
   - Has hospital icon
   - Title: "CureQueue — Real-time Queues & Appointments"

4. **Hover over card**
   - Cursor should change to pointer
   - Card should lift up
   - Shadow should intensify

5. **Click on card**
   - New tab should open
   - URL: https://cure-queue-cyan.vercel.app/
   - Original tab stays on portfolio

6. **Verify deployed site loads**
   - CureQueue application should load
   - No errors

7. **Return to portfolio tab**
   - Should still be on Projects section
   - No changes or reloads

8. **Test other cards**
   - Hover over GlamRents → No pointer cursor
   - Hover over Data Analytics → No pointer cursor
   - Hover over Healthcare AI → No pointer cursor

9. **Test filters**
   - Click "AI/ML" → CureQueue visible and clickable
   - Click "Full-Stack" → CureQueue visible and clickable
   - Click "Data" → CureQueue not visible
   - Click "All" → CureQueue visible and clickable

10. **Test responsive**
    - Resize browser window
    - Test at different breakpoints
    - Verify clickability at all sizes

## ✅ Final Checklist

Before marking as complete:
- [ ] All visual tests pass
- [ ] All functional tests pass
- [ ] All responsive tests pass
- [ ] All browser tests pass
- [ ] All accessibility tests pass
- [ ] No console errors
- [ ] No console warnings
- [ ] Security attributes verified
- [ ] Documentation reviewed
- [ ] Ready for deployment

---

**Status:** Ready for testing

**Next Steps:**
1. Run through all tests
2. Document any issues
3. Fix issues if found
4. Re-test after fixes
5. Deploy when all tests pass

**Questions?** Review PROJECT_LINK_UPDATE.md for implementation details.
