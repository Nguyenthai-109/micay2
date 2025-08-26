let cart = [];

function addToCart(el) {
  const item = el.closest('.menu-item');
  const name = item.dataset.name;
  const price = parseInt(item.dataset.price);
  const img = item.dataset.img;

  const existing = cart.find(c => c.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({name, price, img, quantity: 1});
  }

  document.getElementById('cart-count').textContent = cart.reduce((sum,c) => sum+c.quantity,0);
  updateCartPopup();
  showToast();
}

function decreaseQuantity(name){
  const item = cart.find(c => c.name === name);
  if(item){
    item.quantity -= 1;
    if(item.quantity <= 0){
      cart = cart.filter(c=>c.name!==name);
    }
  }
  document.getElementById('cart-count').textContent = cart.reduce((sum,c) => sum+c.quantity,0);
  updateCartPopup();
}

function toggleCart(){
  const popup = document.getElementById('cart-popup');
  popup.style.display = popup.style.display==='block'?'none':'block';
}

function updateCartPopup(){
  const list = document.getElementById('cart-items');
  list.innerHTML='';
  let total=0;
  cart.forEach(c=>{
    const li = document.createElement('li');
    li.innerHTML=`
      <div class="cart-item-info">
        <img src="${c.img}" alt="${c.name}">
        <span>${c.name} x${c.quantity}</span>
      </div>
      <div class="cart-item-controls">
        <button onclick="decreaseQuantity('${c.name}')">-</button>
        <span>${(c.price*c.quantity).toLocaleString()}VNĐ</span>
      </div>`;
    list.appendChild(li);
    total+=c.price*c.quantity;
  });
  document.getElementById('cart-total').textContent = total.toLocaleString()+'VNĐ';
}

function showToast(){
  const toast = document.getElementById('toast');
  toast.style.display='block';
  setTimeout(()=>{toast.style.display='none'},1500);
}
