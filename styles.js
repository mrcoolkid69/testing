
function loadfooter() {
    document.getElementsByTagName("footer")[0].innerHTML = `
    <table>
    <tr>
    <th>
    <p>Main Pages</p>
    </th>

    <th>
    <p>Newest Games</p>
    </th>

    <th>
    <p>Updates</p>
    </th>

    </tr>
    <tr>
    <td>
    <a href = "home.html">
        <p>Home</p>
    </a>
    <a href = "whywouldyoueventhinkthiswasagame.html">
        <p>Not Games</p>
    </a>
    <a href = "art.html">
        <p>Art</p>
    </a>
    <a href = "codes.html">
        <p>Cool Code</p>
    </a>
    </td>

    <td>
    <p>Skater Board</p>
    <p>Super Tic Tac Toe</p>
    <p>MX Offroad Master</p>
    <p>Tiny Fishing</p>
    </td>

    <td>
    <p>Skater Board is playable</p>
    <p>Footer</p>
    <p>Custom Cursors</p>
    <p>Game Bar</p>
    </td>
    </tr>
    </table>`;
}

loadfooter();