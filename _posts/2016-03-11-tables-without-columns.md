---
title: Tables Without Columns
author: Aaron Moradi
layout: post
permalink: /tables-without-columns/
excerpt: <p>An Effective Way to Use The Layout Luxuries of Tables Without The Constraint of Columns</p>
categories: HTML
---

<style>
  
  td {
    padding: 6px 10px;
    border: 1px solid #ccc;
    
  }
  .no-columns tr {
    display: table;
    border-collapse: collapse;
    width: 100%;
  }
  .no-columns td {
    border-top: none;
  }
  .no-columns {
    border-top: 1px solid #ccc;
  }
  table {
    margin: 0;
    padding: 0;
    border-collapse: collapse;
    
  }
  .layout-table {
    width: 100%;
    height: 600px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  .layout-table tr {
    height: 33.333%;
  }
  .layout-table td {
    padding: 20px;
    font-size: 13px !important;
    padding: 20px !important;
  }
  .mgt-20 {margin-top: 32px;}
  
  @media screen and (max-width: 700px) {
    .layout-table td,
    .layout-table tr:first-child td {
      display: block;
      width: 100%;
      box-sizing: border-box;
      border-top: 0;
    }
    .layout-table tr:first-child td:first-child {
      border-top: 1px solid #ccc;
    }
  }
</style>

<p>Compare the two <code>&lt;table&gt;</code>'s below.</p>
<div class="table-exercise">
<p><strong>Typical Table (with columns)</strong></p>
<table>
  <tr>
    <td>Apple</td>
    <td>Bricks</td>
    <td>Cornucopia</td>
  </tr>
  <tr>
    <td>Dachshund</td>
    <td>Eggs</td>
    <td>Finland</td>
  </tr>
  <tr>
    <td>Gorilla</td>
    <td>Highland</td>
    <td>Ill</td>
  </tr>
</table>

<p class="mgt-20"><strong>Table Without Columns</strong></p>
<table class="no-columns">
  <tr>
    <td>Apple</td>
    <td>Bricks</td>
    <td>Cornucopia</td>
  </tr>
  <tr>
    <td>Dachshund</td>
    <td>Eggs</td>
    <td>Finland</td>
  </tr>
  <tr>
    <td>Gorilla</td>
    <td>Highland</td>
    <td>Ill</td>
  </tr>
</table>

<p class="mgt-20">The above column-less table can be achieved by simply displaying all <code>&lt;tr&gt;</code>'s as <code>&lt;table&gt;</code>'s.</p>
<pre><code>
tr {
    display: table;
    width: 100%;
    border-collapse: collapse;
}</code></pre>

<h2>Use Cases of Tables Without Columns</h2>
<p>In the example below, content fits into a predefined width (100% of its container) and height (600px). The table rows are set to a 33.33% height (200px in this case). If cell content were to exceed the 33.33% height restriction (in the case of long copy, etc.), the entire table would grow taller, yet maintain equal height scaling per row, i.e. the rows would be 33.33% of the total height of the table still.</p>
<p>This is a great way to fit content into blocks or cells, letting content determine cell size, yet maintaining defined rows. For a truly <mark>liquid approach</mark>, ensure table dimensions are percentages, not fixed pixel widths, as in the example below.</p>
<p>**Note On small browser and mobile views, the below table stacks cells. To do this, set: <code> td {display: block;}</code> in your CSS.</p>

<table class="no-columns layout-table">
  <tr>
    <td>Apples are delicious, don't you think? My friend Jason thinks so. He's has good taste. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
    <td>Bricks</td>
    <td>Cornucopia</td>
  </tr>
  <tr>
    <td>Dachshund</td>
    <td>Eggs</td>
    <td>Finland et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur</td>
  </tr>
  <tr>
    <td>Gorilla</td>
    <td>Highland illum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in cul onsectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco l</td>
    <td>Ill ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dol</td>
  </tr>
</table>
</div>

<div class="footnote" id="footnotes">
  <h3>
    Footnotes
  </h3>
  
  <ul>
    <li>
      <a target="_blank" href="http://stackoverflow.com/questions/16628471/responsive-table-cell-to-new-line">Responsive Table Cell to New Line</a>
    </li>
  </ul>
</div>
