## Section 4 - History Factoids

### Visual Overview<br>
Date: May 16, 2024

This section features a line of text above three factoids. Each factoid consists of an SVG image placed over a line of text. The whole block occupies the center of the viewport with paddings on both sides.

### Responsive Design Note

The paddings on both sides shrink when the viewport width decreases. The center portion seems to have a min width of 700 (based on element inspection) or 800 (based on js query).

When the viewport width shrinks below 1375, the three factoid cells also shrinks in width from 275 to 240 (element inspection) 

### Design Note

We think this section is a 2x5 grid. With the first and the last column act as padding and span both rows. The main text occupies the 2nd to the 4th columns of the first row, while each factoid occupies column 2, 3, and 4 on the second row.