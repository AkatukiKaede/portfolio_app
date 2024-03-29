function init() {
  replaceContact();
  fetchPostUser();
  updateUser(0);
  sendButton();
}

function fetchPostUser() {
  try {
    const responce = ["個人", "企業"];
    createUserHtml(responce);
  } catch (e) {
    throw new Error(e);
  }
}

function createUserHtml(PostedUser) {
  const optionStrs = [];
  for (let i = 0; i < PostedUser.length; i++) {
    optionStrs.push(
      `      <option name="${PostedUser[i]}" value="${PostedUser[i]}">${PostedUser[i]}</option>
  `
    );
  }
  const contactSelectElement = document.querySelector("#contactselector");
  contactSelectElement.innerHTML = optionStrs.join("");
  let count = 0;
  contactSelectElement.addEventListener("change", (event) => {
    count++;
    if (count % 2 === 1) {
      updateUser(1);
    } else {
      updateUser(0);
    }
  });
}

function getUserCode() {
  const responce = fetch("../js/contact.json");
  const PostedUser = responce.json();
  console.log(responce.code);
  const UserCode = PostedUser.code;
  updateUser(UserCode);
}

function updateUser(code) {
  const contactElement = document.querySelector("#contact");
  console.log(code);
  replaceContact();
  if (code === 0) {
    replaceContact();
    contactElement.innerHTML = `    <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfuoT4t_9RyGXAdLzFiAyR56Cfo6fxcDbu-nR5WK2ilZa3cTQ/formResponse" method="post" target="hidden_iframe" onsubmit="submitted=true;"
        class="form-field">
        <script type="text/javascript">var submitted = false;</script>
        <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted){window.location="{% url 'portfolio:index' %}";}"></iframe>
    
          <label for="name">お名前</label><br>
          <input id="name" name="entry.1489389585" type="text" class="form-control" placeholder="Full Name">
          <br><label for="email">ご連絡先</label><br>
          <input id="email" name="entry.274378616" type="email" class="form-control" placeholder="Email">
          <br><label for="title">件名</label><br>
          <input id="title" name="entry.1414394743" type="text" class="form-control" placeholder="Title">
          <br><label for="message">お問い合わせ内容</label><br>
          <textarea id="message" name="entry.104963051" cols="40" rows="10" class="form-control" placeholder="Message"></textarea>
          <br>
          <button type="submit" class="btn" onclick="location.href="/contact/">送信</button>
        </form>`;
  } else if (code === 1) {
    replaceContact();
    contactElement.innerHTML = `    <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSe6D-PvyfHIbndWAjsRteGWC-weJ64u1VLC1-OpCYGXDZlh2g/formResponse" method="post" target="hidden_iframe" onsubmit="submitted=true;"
      class="form-field">
      <script type="text/javascript">var submitted = false;</script>
      <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted){window.location="{% url 'portfolio:index' %}";}"></iframe>

        <label for="name">会社名</label><br>
        <input id="name" name="entry.1223711739" type="text" class="form-control" placeholder="Company Name">
        <br><label for="email">名前</label><br>
        <input id="email" name="entry.856583386" type="email" class="form-control" placeholder="Name">
        <br><label for="email">メールアドレス</label><br>
        <input id="email" name="entry.975637280" type="email" class="form-control" placeholder="Email">
        <br><label for="title">件名</label><br>
        <input id="title" name="entry.740955822" type="text" class="form-control" placeholder="Title">
        <br><label for="message">お問い合わせ内容</label><br>
        <textarea id="message" name="entry.1855759088" cols="40" rows="10" class="form-control" placeholder="Message"></textarea>
        <br>
        <button type="submit" class="btn" onclick="location.href="/contact/">送信</button>
      </form>`;
  }
}

function replaceContact() {
  const contactElement = document.querySelector("#contact");
  contactElement.innerHTML = "";
}

function sendButton() {
  const ButtonElement = document.querySelectorA(".btn");
  ButtonElement.addEventListener("click", () => {
    const thxElement = document.querySelector("#thx");
    thxElement.innerHTML = "メールが送信されました。ありがとうございます。";
  });
}

init();
