'use strict';

const student = { name: 'James', followerCount: 34 };

let tableHtml = `
  <table class="table">
    <thead>
      <tr>
        <td>Name</td>
        <td>Followers</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${student.name}</td>
        <td></td>
      </tr>
    </tbody>
  </table>`;

console.log(tableHtml);

// ` is important for the new js template strings