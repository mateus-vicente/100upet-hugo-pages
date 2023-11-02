---
# SPDX-FileCopyrightText: 2022 100µPET
# SPDX-License-Identifier: CC-BY-4.0
title: "ASIC I/O"
weight: 1
---

## Pads numbering
The numbering of the pads of the 100µPET ASIC is done as illustrated below
<img src="../Images/ASIC_pads.png" width="70%">

### Pads position to chip's edge
All dimensions below are given in µm. </br>
**NOTE:** The distances given within the red boxes are w.r.t. design edge. 
Silicon excess from dicing street should still be considered.

<div style="display: flex; justify-content: space-between; align-items: flex-start;">
   <div style="text-align: center; flex: 0 0 45%; margin: 10px;">
        <img src="../Images/top_left.png" alt="Image 1" height="100%" style="border: 1px solid black;">
        <div style="margin-top: 5px; font-size: 14px; text-align: center;">
		   Top left edge
        </div>
   </div>
   <div style="text-align: center; flex: 0 0 45%; margin: 10px; margin-right: 200px;">
        <img src="../Images/top_right.png" alt="Image 2" height="100%" style="border: 1px solid black;">
        <div style="margin-top: 5px; font-size: 14px; text-align: center;">
		   Top right edge
        </div>
   </div>
</div>
<div style="display: flex; justify-content: space-between; align-items: flex-start;">
   <div style="text-align: center; flex: 0 0 45%; margin: 10px;">
        <img src="../Images/bot_left.png" alt="Image 1" height="100%" style="border: 1px solid black;">
        <div style="margin-top: 5px; font-size: 14px; text-align: center;">
		   Bottom left edge
        </div>
   </div>
   <div style="text-align: center; flex: 0 0 45%; margin: 10px; margin-right: 200px;">
        <img src="../Images/bot_right.png" alt="Image 2" height="100%" style="border: 1px solid black;">
        <div style="margin-top: 5px; font-size: 14px; text-align: center;">
		   Bottom right edge
        </div>
   </div>
</div>

## I/O list

<html xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:x="urn:schemas-microsoft-com:office:excel"
xmlns="http://www.w3.org/TR/REC-html40">

<head>
<meta http-equiv=Content-Type content="text/html; charset=utf-8">
<meta name=ProgId content=Excel.Sheet>
<meta name=Generator content="Microsoft Excel 15">
<link rel=File-List href="IO_pads_100uPET.fld/filelist.xml">
<style id="IO_pads_100uPET_8008_Styles">
<!--table
	{mso-displayed-decimal-separator:"\.";
	mso-displayed-thousand-separator:"\0027";}
@page
	{margin:.75in .7in .75in .7in;
	mso-header-margin:.3in;
	mso-footer-margin:.3in;}
tr
	{mso-height-source:auto;}
col
	{mso-width-source:auto;}
br
	{mso-data-placement:same-cell;}
.style0
	{mso-number-format:General;
	text-align:general;
	vertical-align:bottom;
	white-space:nowrap;
	mso-rotate:0;
	mso-background-source:auto;
	mso-pattern:auto;
	color:black;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:Calibri, sans-serif;
	mso-font-charset:0;
	border:none;
	mso-protection:locked visible;
	mso-style-name:Normal;
	mso-style-id:0;}
td
	{mso-style-parent:style0;
	padding-top:1px;
	padding-right:1px;
	padding-left:1px;
	mso-ignore:padding;
	color:black;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:Calibri, sans-serif;
	mso-font-charset:0;
	mso-number-format:General;
	text-align:general;
	vertical-align:bottom;
	border:none;
	mso-background-source:auto;
	mso-pattern:auto;
	mso-protection:locked visible;
	white-space:nowrap;
	mso-rotate:0;}
.xl65
	{mso-style-parent:style0;
	color:black;
	font-size:18.0pt;
	font-weight:700;}
.xl66
	{mso-style-parent:style0;
	color:black;}
.xl67
	{mso-style-parent:style0;
	color:black;
	font-weight:700;
	text-align:right;
	border:.5pt solid windowtext;}
.xl68
	{mso-style-parent:style0;
	color:black;
	font-weight:700;
	border-top:.5pt solid windowtext;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;
	border-left:none;}
.xl69
	{mso-style-parent:style0;
	color:black;
	font-weight:700;
	text-align:right;
	border-top:.5pt solid windowtext;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;
	border-left:none;}
.xl70
	{mso-style-parent:style0;
	color:black;
	border-top:none;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;
	border-left:.5pt solid windowtext;}
.xl71
	{mso-style-parent:style0;
	color:black;
	border-top:none;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;
	border-left:none;
	background:#BFBFBF;
	mso-pattern:black none;}
.xl72
	{mso-style-parent:style0;
	color:black;
	border-top:none;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;
	border-left:none;}
.xl73
	{mso-style-parent:style0;
	color:black;
	border-top:none;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;
	border-left:none;
	background:#FFA1A1;
	mso-pattern:black none;}
.xl74
	{mso-style-parent:style0;
	color:black;
	border-top:none;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;
	border-left:none;
	background:#D9D9D9;
	mso-pattern:black none;}
.xl75
	{mso-style-parent:style0;
	color:black;
	border-top:none;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;
	border-left:none;
	background:#FCE4D6;
	mso-pattern:black none;}
.xl76
	{mso-style-parent:style0;
	color:black;
	border-top:none;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;
	border-left:none;
	background:#FCE19D;
	mso-pattern:black none;}
.xl77
	{mso-style-parent:style0;
	color:black;
	border-top:none;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;
	border-left:none;
	background:#8EA9DB;
	mso-pattern:black none;}
.xl78
	{mso-style-parent:style0;
	color:black;
	border-top:none;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;
	border-left:none;
	background:#A9D08E;
	mso-pattern:black none;}
.xl79
	{mso-style-parent:style0;
	color:black;
	border-top:none;
	border-right:none;
	border-bottom:.5pt solid windowtext;
	border-left:none;
	background:#A9D08E;
	mso-pattern:black none;}
.xl80
	{mso-style-parent:style0;
	color:black;
	border-top:none;
	border-right:none;
	border-bottom:none;
	border-left:.5pt solid windowtext;}
.xl81
	{mso-style-parent:style0;
	color:black;
	border-top:none;
	border-right:none;
	border-bottom:.5pt solid windowtext;
	border-left:none;
	background:#FCE19D;
	mso-pattern:black none;}
.xl82
	{mso-style-parent:style0;
	color:black;
	border-top:none;
	border-right:none;
	border-bottom:.5pt solid windowtext;
	border-left:none;
	background:#FFA1A1;
	mso-pattern:black none;}
.xl83
	{mso-style-parent:style0;
	color:black;
	border-top:none;
	border-right:none;
	border-bottom:.5pt solid windowtext;
	border-left:none;
	background:#FCE4D6;
	mso-pattern:black none;}
.xl84
	{mso-style-parent:style0;
	color:black;
	border-top:none;
	border-right:none;
	border-bottom:.5pt solid windowtext;
	border-left:none;
	background:#D9D9D9;
	mso-pattern:black none;}
.xl85
	{mso-style-parent:style0;
	color:black;
	border-top:none;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;
	border-left:none;
	background:#9BC2E6;
	mso-pattern:black none;}
.xl86
	{mso-style-parent:style0;
	font-weight:700;}
-->
</style>
</head>

<body link="#0563C1" vlink="#954F72">
<!--[if !excel]>&nbsp;&nbsp;<![endif]-->
<!--The following information was generated by Microsoft Excel's Publish as Web
Page wizard.-->
<!--If the same item is republished from Excel, all information between the DIV
tags will be replaced.-->
<!----------------------------->
<!--START OF OUTPUT FROM EXCEL PUBLISH AS WEB PAGE WIZARD -->
<!----------------------------->

<div id="IO_pads_100uPET_8008" align=center x:publishsource="Excel"><!--The following information was generated by Microsoft Excel's Publish as Web
Page wizard.--><!--If the same item is republished from Excel, all information between the DIV
tags will be replaced.--><!-----------------------------><!--START OF OUTPUT FROM EXCEL PUBLISH AS WEB PAGE WIZARD --><!----------------------------->

<table border=0 cellpadding=0 cellspacing=0 width=1293 style='border-collapse:
 collapse;table-layout:fixed;width:970pt'>
 <col width=33 style='mso-width-source:userset;mso-width-alt:1066;width:25pt'>
 <col width=81 style='mso-width-source:userset;mso-width-alt:2602;width:61pt'>
 <col width=83 style='mso-width-source:userset;mso-width-alt:2645;width:62pt'>
 <col width=65 style='mso-width-source:userset;mso-width-alt:2090;width:49pt'>
 <col width=33 style='mso-width-source:userset;mso-width-alt:1066;width:25pt'>
 <col width=87 style='mso-width-source:userset;mso-width-alt:2773;width:65pt'>
 <col width=88 style='mso-width-source:userset;mso-width-alt:2816;width:66pt'>
 <col width=99 style='mso-width-source:userset;mso-width-alt:3157;width:74pt'>
 <col width=33 style='mso-width-source:userset;mso-width-alt:1066;width:25pt'>
 <col width=100 style='mso-width-source:userset;mso-width-alt:3200;width:75pt'>
 <col width=75 style='mso-width-source:userset;mso-width-alt:2389;width:56pt'>
 <col width=80 style='mso-width-source:userset;mso-width-alt:2560;width:60pt'>
 <col width=33 style='mso-width-source:userset;mso-width-alt:1066;width:25pt'>
 <col width=81 style='mso-width-source:userset;mso-width-alt:2602;width:61pt'>
 <col width=83 style='mso-width-source:userset;mso-width-alt:2645;width:62pt'>
 <col width=65 style='mso-width-source:userset;mso-width-alt:2090;width:49pt'>
 <col width=87 span=2 style='width:65pt'>
 <tr height=32 style='height:24.0pt'>
  <td height=32 class=xl65 colspan=5 width=295 style='height:24.0pt;mso-ignore:
  colspan;width:222pt'>Bottom I/O (periphery side)</td>
  <td class=xl66 width=87 style='width:65pt'></td>
  <td class=xl66 width=88 style='width:66pt'></td>
  <td class=xl66 width=99 style='width:74pt'></td>
  <td class=xl66 width=33 style='width:25pt'></td>
  <td class=xl66 width=100 style='width:75pt'></td>
  <td class=xl66 width=75 style='width:56pt'></td>
  <td class=xl66 width=80 style='width:60pt'></td>
  <td class=xl66 width=33 style='width:25pt'></td>
  <td class=xl66 width=81 style='width:61pt'></td>
  <td class=xl66 width=83 style='width:62pt'></td>
  <td class=xl66 width=65 style='width:49pt'></td>
  <td width=87 style='width:65pt'></td>
  <td width=87 style='width:65pt'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl66 style='height:15.0pt'></td>
  <td class=xl86 colspan=3 style='mso-ignore:colspan'>Counting from left to
  right</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl66 style='height:15.0pt'></td>
  <td class=xl86 colspan=3 style='mso-ignore:colspan'>Pad pitch on a row: 300
  µm</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl66 style='height:15.0pt'></td>
  <td class=xl86 colspan=5 style='mso-ignore:colspan'>Pads staggered on two
  rows: final pitch 150 µm</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl66 style='height:15.0pt'></td>
  <td class=xl86>vertical pitc<span style='display:none'>h:</span></td>
  <td class=xl86>250 µm</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl66 style='height:15.0pt'></td>
  <td class=xl86>Pad size:</td>
  <td class=xl86>120 x 100</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl66 style='height:15.0pt'></td>
  <td class=xl86 colspan=3 style='mso-ignore:colspan'>Extra distance for HV_sub
  pads</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl66 style='height:15.0pt'></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl67 style='height:15.0pt'>#</td>
  <td class=xl68>Name</td>
  <td class=xl68>Type</td>
  <td class=xl68>Flex net</td>
  <td class=xl69>#</td>
  <td class=xl68>Name</td>
  <td class=xl68>Type</td>
  <td class=xl68>Flex net</td>
  <td class=xl69>#</td>
  <td class=xl68>Name</td>
  <td class=xl68>Type</td>
  <td class=xl68>Flex net</td>
  <td class=xl69>#</td>
  <td class=xl68>Name</td>
  <td class=xl68>Type</td>
  <td class=xl68>Flex net</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>1</td>
  <td class=xl71>HV_SUB</td>
  <td class=xl71>high voltage</td>
  <td class=xl71>HV</td>
  <td class=xl72 align=right>57</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>113</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>169</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl74>VDD_DIG</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>2</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>58</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>114</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>170</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>3</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>59</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>115</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>171</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>4</td>
  <td class=xl77>THRESHOLD</td>
  <td class=xl77>threshold</td>
  <td class=xl77>THR</td>
  <td class=xl72 align=right>60</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>116</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl74>VDD_DIG</td>
  <td class=xl72 align=right>172</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>5</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl74>VDD_DIG</td>
  <td class=xl72 align=right>61</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl74>VDD_DIG</td>
  <td class=xl72 align=right>117</td>
  <td class=xl78>DATA_IN-</td>
  <td class=xl78>LVDS IN</td>
  <td class=xl78>DATA-&lt;i-1&gt;</td>
  <td class=xl72 align=right>173</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>6</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>62</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>118</td>
  <td class=xl78>DATA_IN+</td>
  <td class=xl78>LVDS IN</td>
  <td class=xl78>DATA+&lt;i-1&gt;</td>
  <td class=xl72 align=right>174</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>7</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>63</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>119</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>175</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>8</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>64</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>120</td>
  <td class=xl78>DATA_OUT-</td>
  <td class=xl78>LVDS OUT</td>
  <td class=xl78>DATA-&lt;i&gt;</td>
  <td class=xl72 align=right>176</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl74>VDD_DIG</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>9</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>65</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>121</td>
  <td class=xl78>DATA_OUT+</td>
  <td class=xl78>LVDS OUT</td>
  <td class=xl78>DATA+&lt;i&gt;</td>
  <td class=xl72 align=right>177</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>10</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>66</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>122</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>178</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>11</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>67</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>123</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>179</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>12</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl74>VDD_DIG</td>
  <td class=xl72 align=right>68</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl74>VDD_DIG</td>
  <td class=xl72 align=right>124</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>180</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>13</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>69</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>125</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>181</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>14</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>70</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>126</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>182</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>15</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>71</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>127</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl74>VDD_DIG</td>
  <td class=xl72 align=right>183</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl74>VDD_DIG</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>16</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>72</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>128</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>184</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>17</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>73</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>129</td>
  <td class=xl78>RESET_N</td>
  <td class=xl78>CMOS IN</td>
  <td class=xl78>POWER_ON</td>
  <td class=xl72 align=right>185</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>18</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>74</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>130</td>
  <td class=xl78>RESET_N_sync-</td>
  <td class=xl78>LVDS IN</td>
  <td class=xl78>RESET_N-</td>
  <td class=xl72 align=right>186</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>19</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl74>VDD_DIG</td>
  <td class=xl72 align=right>75</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl74>VDD_DIG</td>
  <td class=xl72 align=right>131</td>
  <td class=xl78>RESET_N_sync+</td>
  <td class=xl78>LVDS IN</td>
  <td class=xl78>RESET_N+</td>
  <td class=xl72 align=right>187</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>20</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>76</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>132</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>188</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>21</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>77</td>
  <td class=xl78>ACK_in</td>
  <td class=xl78>CMOS IN</td>
  <td class=xl78>ACK_C&lt;i+1&gt;</td>
  <td class=xl72 align=right>133</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>189</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>22</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>78</td>
  <td class=xl78>ACK_out</td>
  <td class=xl78>CMOS OUT</td>
  <td class=xl78>ACK_C&lt;i&gt;</td>
  <td class=xl72 align=right>134</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>190</td>
  <td class=xl77>THRESHOLD</td>
  <td class=xl77>threshold</td>
  <td class=xl77>THR</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>23</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>79</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>135</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>191</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl74>VDD_DIG</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>24</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>80</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>136</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>192</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>25</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>81</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>137</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl74>VDD_DIG</td>
  <td class=xl72 align=right>193</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>26</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl74>VDD_DIG</td>
  <td class=xl72 align=right>82</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>138</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>194</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>27</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>83</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>139</td>
  <td class=xl78>SPI_MOSI</td>
  <td class=xl78>CMOS IN</td>
  <td class=xl78>SPI_MOSI</td>
  <td class=xl72 align=right>195</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>28</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>84</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl74>VDD_DIG</td>
  <td class=xl72 align=right>140</td>
  <td class=xl78>SPI_CLK</td>
  <td class=xl78>CMOS IN</td>
  <td class=xl78>SPI_CLK</td>
  <td class=xl72 align=right>196</td>
  <td class=xl71>HV_SUB</td>
  <td class=xl71>high voltage</td>
  <td class=xl71>HV</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>29</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>85</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>141</td>
  <td class=xl78>SPI_CS</td>
  <td class=xl78>CMOS IN</td>
  <td class=xl79>SPI_CS</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>30</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>86</td>
  <td class=xl78>Req_in</td>
  <td class=xl78>CMOS IN</td>
  <td class=xl78>Req&lt;i-1&gt;</td>
  <td class=xl72 align=right>142</td>
  <td class=xl78>SPI_MISO</td>
  <td class=xl78>CMOS OUT</td>
  <td class=xl79>N/A</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>31</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>87</td>
  <td class=xl78>Req_out</td>
  <td class=xl78>CMOS OUT</td>
  <td class=xl78>Req&lt;i&gt;</td>
  <td class=xl72 align=right>143</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl81>VDD_DIG</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>32</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>88</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>144</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl82>GND</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>33</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl74>VDD_DIG</td>
  <td class=xl72 align=right>89</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>145</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl82>VCC_A</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>34</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>90</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>146</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl83>GND</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>35</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>91</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>147</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl83>VDD_DIG</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>36</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>92</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>148</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl84>VDD_DIG</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>37</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>93</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl74>VDD_DIG</td>
  <td class=xl72 align=right>149</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl81>GND</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>38</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>94</td>
  <td class=xl85>CHIP_ID_0</td>
  <td class=xl85>POWER/GND</td>
  <td class=xl85>GND/VDD_DIG</td>
  <td class=xl72 align=right>150</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl81>VDD_DIG</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>39</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>95</td>
  <td class=xl85>CHIP_ID_1</td>
  <td class=xl85>POWER/GND</td>
  <td class=xl85>GND/VDD_DIG</td>
  <td class=xl72 align=right>151</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl82>GND</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>40</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl74>VDD_DIG</td>
  <td class=xl72 align=right>96</td>
  <td class=xl85>CHIP_ID_2</td>
  <td class=xl85>POWER/GND</td>
  <td class=xl85>GND/VDD_DIG</td>
  <td class=xl72 align=right>152</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl82>VCC_A</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>41</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>97</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>153</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl83>GND</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>42</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>98</td>
  <td class=xl78>TRIG_SLOW-</td>
  <td class=xl78>LVDS OUT</td>
  <td class=xl78>N/A</td>
  <td class=xl72 align=right>154</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl83>VDD_DIG</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>43</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>99</td>
  <td class=xl78>TRIG_SLOW+</td>
  <td class=xl78>LVDS OUT</td>
  <td class=xl78>N/A</td>
  <td class=xl72 align=right>155</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl84>VDD_DIG</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>44</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>100</td>
  <td class=xl78>TRIG_FAST-</td>
  <td class=xl78>LVDS OUT</td>
  <td class=xl78>N/A</td>
  <td class=xl72 align=right>156</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl81>GND</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>45</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>101</td>
  <td class=xl78>TRIG_FAST+</td>
  <td class=xl78>LVDS OUT</td>
  <td class=xl78>N/A</td>
  <td class=xl72 align=right>157</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl81>VDD_DIG</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>46</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>102</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>158</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl82>GND</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>47</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl74>VDD_DIG</td>
  <td class=xl72 align=right>103</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>159</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl82>VCC_A</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>48</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>104</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>160</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl83>GND</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>49</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>105</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>161</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl83>VDD_DIG</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>50</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>106</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>162</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl84>VDD_DIG</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>51</td>
  <td class=xl77>GR0</td>
  <td class=xl77>GuardRing</td>
  <td class=xl77>VCC_A</td>
  <td class=xl72 align=right>107</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl74>VDD_DIG</td>
  <td class=xl72 align=right>163</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl81>GND</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>52</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>108</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>164</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl81>VDD_DIG</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>53</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>109</td>
  <td class=xl78>RO_CLK-</td>
  <td class=xl78>LVDS IN</td>
  <td class=xl78>RO_CLK-</td>
  <td class=xl72 align=right>165</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl82>GND</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>54</td>
  <td class=xl74>VDD_OSC</td>
  <td class=xl74>power</td>
  <td class=xl74>VDD_DIG</td>
  <td class=xl72 align=right>110</td>
  <td class=xl78>RO_CLK+</td>
  <td class=xl78>LVDS IN</td>
  <td class=xl78>RO_CLK+</td>
  <td class=xl72 align=right>166</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl82>VCC_A</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td></td>
  <td></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>55</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>111</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>167</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl83>GND</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td></td>
  <td></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>56</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>112</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>168</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl83>VDD_DIG</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td></td>
  <td></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl66 style='height:15.0pt'></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td></td>
  <td></td>
 </tr>
 <tr height=32 style='height:24.0pt'>
  <td height=32 class=xl65 colspan=4 style='height:24.0pt;mso-ignore:colspan'>Top
  I/O (power only)</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td></td>
  <td></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl66 style='height:15.0pt'></td>
  <td class=xl86 colspan=3 style='mso-ignore:colspan'>Counting from left to
  right</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td></td>
  <td></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl66 style='height:15.0pt'></td>
  <td class=xl86 colspan=3 style='mso-ignore:colspan'>Pad pitch on a row: 300
  µm</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td></td>
  <td></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl66 style='height:15.0pt'></td>
  <td class=xl86>Pad size:</td>
  <td class=xl86>120 x 100</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td></td>
  <td></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl66 style='height:15.0pt'></td>
  <td class=xl86 colspan=3 style='mso-ignore:colspan'>Extra distance for HV_sub
  pads</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td></td>
  <td></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl66 style='height:15.0pt'></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl67 style='height:15.0pt'>#</td>
  <td class=xl68>Name</td>
  <td class=xl68>Type</td>
  <td class=xl68>Flex net</td>
  <td class=xl69>#</td>
  <td class=xl68>Name</td>
  <td class=xl68>Type</td>
  <td class=xl68>Flex net</td>
  <td class=xl69>#</td>
  <td class=xl68>Name</td>
  <td class=xl68>Type</td>
  <td class=xl68>Flex net</td>
  <td class=xl69>#</td>
  <td class=xl68>Name</td>
  <td class=xl68>Type</td>
  <td class=xl68>Flex net</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>197</td>
  <td class=xl71>HV_SUB</td>
  <td class=xl71>high voltage</td>
  <td class=xl71>HV</td>
  <td class=xl72 align=right>225</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>253</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>281</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>198</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>226</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>254</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>282</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>199</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>227</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>255</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>283</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>200</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>228</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>256</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>284</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>201</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>229</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>257</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>285</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>202</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>230</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>258</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>286</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>203</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>231</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>259</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>287</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>204</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>232</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>260</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>288</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>205</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>233</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>261</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>289</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>206</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>234</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>262</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>290</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>207</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>235</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>263</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>291</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>208</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>236</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>264</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>292</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>209</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>237</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>265</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>293</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>210</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>238</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>266</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>294</td>
  <td class=xl77>THRESHOLD</td>
  <td class=xl77>threshold</td>
  <td class=xl77>THR</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>211</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>239</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>267</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>295</td>
  <td class=xl71>HV_SUB</td>
  <td class=xl71>high voltage</td>
  <td class=xl71>HV</td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>212</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>240</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>268</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl82>GND</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>213</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>241</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>269</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl82>VCC_A</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>214</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>242</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>270</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl83>GND</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>215</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>243</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>271</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl83>VDD_DIG</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>216</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>244</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>272</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl81>GND</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>217</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>245</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>273</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl81>VDD_DIG</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>218</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>246</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>274</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl82>GND</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>219</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>247</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>275</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl82>VCC_A</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>220</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>248</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>276</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl83>GND</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>221</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>249</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl76>VDD_DIG</td>
  <td class=xl72 align=right>277</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl83>VDD_DIG</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>222</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>250</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl73>GND</td>
  <td class=xl72 align=right>278</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl81>GND</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>223</td>
  <td class=xl75>VDD_DISC</td>
  <td class=xl75>power</td>
  <td class=xl75>VDD_DIG</td>
  <td class=xl72 align=right>251</td>
  <td class=xl73>VCC_A</td>
  <td class=xl73>power</td>
  <td class=xl73>VCC_A</td>
  <td class=xl72 align=right>279</td>
  <td class=xl76>VDD</td>
  <td class=xl76>power</td>
  <td class=xl81>VDD_DIG</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 class=xl70 align=right style='height:15.0pt'>224</td>
  <td class=xl76>VSS</td>
  <td class=xl76>ground</td>
  <td class=xl76>GND</td>
  <td class=xl72 align=right>252</td>
  <td class=xl75>GND_DISC</td>
  <td class=xl75>ground</td>
  <td class=xl75>GND</td>
  <td class=xl72 align=right>280</td>
  <td class=xl73>GND_A</td>
  <td class=xl73>ground</td>
  <td class=xl82>GND</td>
  <td class=xl80>&nbsp;</td>
  <td class=xl66></td>
  <td class=xl66></td>
  <td class=xl66><!-----------------------------><!--END OF OUTPUT FROM EXCEL PUBLISH AS WEB PAGE WIZARD--><!-----------------------------></td>
  <td colspan=2 style='mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 colspan=18 style='height:15.0pt;mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 colspan=18 style='height:15.0pt;mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 colspan=18 style='height:15.0pt;mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 colspan=18 style='height:15.0pt;mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 colspan=18 style='height:15.0pt;mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 colspan=18 style='height:15.0pt;mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 colspan=18 style='height:15.0pt;mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 colspan=18 style='height:15.0pt;mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 colspan=18 style='height:15.0pt;mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 colspan=18 style='height:15.0pt;mso-ignore:colspan'></td>
 </tr>
 <tr height=20 style='height:15.0pt'>
  <td height=20 colspan=18 style='height:15.0pt;mso-ignore:colspan'></td>
 </tr>
 <![if supportMisalignedColumns]>
 <tr height=0 style='display:none'>
  <td width=33 style='width:25pt'></td>
  <td width=81 style='width:61pt'></td>
  <td width=83 style='width:62pt'></td>
  <td width=65 style='width:49pt'></td>
  <td width=33 style='width:25pt'></td>
  <td width=87 style='width:65pt'></td>
  <td width=88 style='width:66pt'></td>
  <td width=99 style='width:74pt'></td>
  <td width=33 style='width:25pt'></td>
  <td width=100 style='width:75pt'></td>
  <td width=75 style='width:56pt'></td>
  <td width=80 style='width:60pt'></td>
  <td width=33 style='width:25pt'></td>
  <td width=81 style='width:61pt'></td>
  <td width=83 style='width:62pt'></td>
  <td width=65 style='width:49pt'></td>
  <td width=87 style='width:65pt'></td>
  <td width=87 style='width:65pt'></td>
 </tr>
 <![endif]>
</table>

</div>


<!----------------------------->
<!--END OF OUTPUT FROM EXCEL PUBLISH AS WEB PAGE WIZARD-->
<!----------------------------->
</body>

</html>
