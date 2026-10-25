# Team Collaboration & Project Finishing Guide 🚀

> **Welcome to the team!** This guide outlines exactly what you and your teammates need to do to finalize, polish, and submit our **Design Thinking (HUM_4342)** project for **MIT Bengaluru**.

---

## 📋 Table of Contents
1. [Where Things Stand Right Now](#1-where-things-stand-right-now)
2. [Step 1: Update Team Member Names & Registration Numbers](#step-1-update-team-member-names--registration-numbers)
3. [Step 2: Re-generate the Report, Slides, and Poster](#step-2-re-generate-the-report-slides-and-poster)
4. [Step 3: Enable GitHub Pages for Live Demo Access](#step-3-enable-github-pages-for-live-demo-access)
5. [Step 4: Rehearse and Record the Video Presentation](#step-4-rehearse-and-record-the-video-presentation)
6. [Step 5: Final Submission Checklist](#step-5-final-submission-checklist)
7. [Helpful Commands & Quick Reference](#helpful-commands--quick-reference)

---

## 1. Where Things Stand Right Now

All core design and engineering work for this project is completed:
- ✅ **Interactive Prototype**: Fully working Apple-grade web application (`prototype/index.html`) with all filters, search, chat drawer, and UPI QR modal.
- ✅ **Design Thinking Report**: 25+ page academic report structure (`Design Thinking Report.docx` and `build_report.py`).
- ✅ **Widescreen Slide Deck**: 15 Apple-style slides (`Design Thinking_Presentation_Final.pptx` and `build_presentation.py`).
- ✅ **Academic Poster**: Single-slide high-impact poster (`Design Thinking Poster.pptx` and `update_poster.py`).
- ✅ **Video Script**: Word-for-word transcript divided across 2 speakers in [`VIDEO_SCRIPT_AND_GUIDE.md`](VIDEO_SCRIPT_AND_GUIDE.md).

---

## Step 1: Update Team Member Names & Registration Numbers

Before final submission, replace the placeholder names (`Team Member 1`, `Team Member 2`, `2309xxxxx`) with your actual team details.

### 1. In `build_report.py` (Lines 24–25):
Open `build_report.py` and update the two student names and registration numbers:
```python
# Replace with your actual names and registration numbers:
table0.rows[0].cells[0].text = "Submitted by:\n1. [Your Name]\n2. [Teammate Name]"
table0.rows[0].cells[1].text = "Registration No:\n2309xxxxx\n2309xxxxx"
```

### 2. In `build_presentation.py` (Slide 1 Names list):
Update the author names in `build_presentation.py`:
```python
names = [
    "1. [Your Name] (Reg. No: 2309xxxxx)",
    "2. [Teammate Name] (Reg. No: 2309xxxxx)"
]
```

### 3. In `update_poster.py` (Line 25):
Open `update_poster.py` and update the author line:
```python
s.text_frame.text = "Team Members: [Your Name] | [Teammate Name]  •  Reg Nos: [2309xxxxx | 2309xxxxx]\nMentor: Dr. Vandana Jha, Associate Professor  •  Manipal Institute of Technology Bengaluru, MAHE"
```

### 4. In `README.md` & `VIDEO_SCRIPT_AND_GUIDE.md`:
Update the team section at the bottom of `README.md` and the speaker names in `VIDEO_SCRIPT_AND_GUIDE.md`.

---

## Step 2: Re-generate the Report, Slides, and Poster

Once you've entered your names, run the Python scripts to re-generate the final documents:

```bash
# 1. Install dependencies (only takes 5 seconds)
pip install -r requirements.txt

# 2. Re-generate the academic report docx
python build_report.py

# 3. Re-generate the presentation pptx
python build_presentation.py

# 4. Re-generate the poster pptx
python update_poster.py
```

### Checking the Outputs:
- Open `Design Thinking Report.docx` in Microsoft Word or Google Docs to verify the title table has your names.
- Open `Design Thinking_Presentation_Final.pptx` in PowerPoint to confirm Slide 1 has your team details.
- Open `Design Thinking Poster.pptx` to verify the poster header.

> **Tip:** You can also export both `.pptx` and `.docx` to `.pdf` inside Microsoft Office (`File -> Export as PDF`) if your submission portal requires PDF format.

---

## Step 3: Enable GitHub Pages for Live Demo Access

To let professors and evaluators open the prototype instantly without downloading code:

1. Open this repository on GitHub (`https://github.com/capsid85/CampusShare`).
2. Go to **Settings** (tab at the top) &rarr; **Pages** (in the left sidebar).
3. Under **Branch**, select `main` and root `/ (root)`.
4. Click **Save**.
5. Within 1–2 minutes, your live prototype will be accessible at:  
   `https://capsid85.github.io/CampusShare/`
6. You can put this live link in your presentation slides and final report!

---

## Step 4: Rehearse and Record the Video Presentation

The complete word-for-word presentation script is prepared in [`VIDEO_SCRIPT_AND_GUIDE.md`](VIDEO_SCRIPT_AND_GUIDE.md).

### 2-Member Speaker Roles (50/50 Split):
| Speaker | Topic | Slides / Screen | Duration |
|---|---|---|---|
| **Member 1 (You or Teammate)** | **Part 1:** Welcome, Academic Context, Empathy Phase, 5-Whys Analysis & Ideation | Slides 1–8 in PowerPoint (`F11`) | ~2.5 – 3.0 mins |
| **Member 2 (Teammate or You)** | **Part 2:** Live Working Prototype Walkthrough, User Testing Feedback & Conclusion | Live Browser (`prototype/index.html` or GitHub Pages) & Slides 13–15 | ~3.0 – 3.5 mins |

*Total Video Duration: ~5.5 to 6.5 minutes (Target: 5 to 7 minutes).*

### Recording Checklist:
1. **Tool**: Open Google Meet, Zoom, or OBS Studio.
2. **Cameras**: Turn webcams ON with decent lighting.
3. **Screen Sharing**: Use `F11` (full-screen) when sharing PowerPoint slides and browser.
4. **Target Duration**: Keep between **5:00 and 7:00 minutes**.
5. **Upload**: Save as `.mp4`, upload to Google Drive or YouTube as **Unlisted**, and copy the shareable link.

---

## Step 5: Final Submission Checklist

Before submitting to the academic portal (Moodle / MS Teams), ensure you have the following items ready:

- [ ] **1. Written Report**: `Design Thinking Report.docx` (and exported `Design Thinking Report.pdf`).
- [ ] **2. Presentation Deck**: `Design Thinking_Presentation_Final.pptx` (and exported `Design Thinking_Presentation_Final.pdf`).
- [ ] **3. Project Poster**: `Design Thinking Poster.pptx` (and exported `Design Thinking Poster.pdf`).
- [ ] **4. Video Presentation**: 5–7 minute video recording link (Google Drive / YouTube Unlisted).
- [ ] **5. Live Prototype Link**: GitHub Pages URL (`https://capsid85.github.io/CampusShare/`).
- [ ] **6. GitHub Source Code**: Repository link (`https://github.com/capsid85/CampusShare`).

---

## 🛠 Helpful Commands & Quick Reference

### Launching Local Web Server for Prototype:
```bash
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

### Git Workflow for Collaborators:
```bash
# Pull the latest changes
git pull origin main

# Create a branch for edits
git checkout -b update-team-details

# Stage and commit your changes
git add .
git commit -m "Update team member details and student registration numbers"

# Push changes to GitHub
git push origin update-team-details
```

---
*Questions? Review [`VIDEO_SCRIPT_AND_GUIDE.md`](VIDEO_SCRIPT_AND_GUIDE.md) or open an issue on the repository!*
