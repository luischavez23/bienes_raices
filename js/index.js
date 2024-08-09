// Simulate a database as backend
import { dbHouses }  from './dbHouses.js';


document.addEventListener( 'DOMContentLoaded', () => {
    // Card container
    const houseContainer = document.querySelector('.house__container');
    
    // Generate cards
    dbHouses.forEach(({ id, price, municipality, country }) => {
        const houseCard = document.createElement('div');
            
        houseCard.classList.add('house__card');
    
        houseCard.innerHTML = `
            <img src="./img/img_${id}.jpg" alt="House ${id}" class="house__picture">
            <div class="house__content">
                <p class="house__price">$ ${price} MXN</p>
                <p class="house__city">${municipality}, ${country}.</p>
                <a href="#" class="house__btn button" data-id="${id}">Ver Propiedad</a>
            </div>
        `;
        houseContainer.appendChild(houseCard);
    });
    
    // Modal show
    const modal = document.querySelector('.modal__container');
    const modalContent = document.querySelector('.modal__content');
    const housesBtn = document.querySelectorAll('.house__btn');
    
    housesBtn.forEach( button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const id = button.dataset.id;
            const house = dbHouses.find(house => house.id == id);
           
            if(house){
                const { id, address, municipality, country , price, room, bathroom} = house;

                modalContent.innerHTML = `
                <div class="modal__card">
                    <div class="modal__header">
                        <span href="#" class="modal__close">&times;</span>
                    </div>
                    <div class="modal__info">
                        <img src="./img/img_${id}.jpg" alt="House ${id}" class="modal__picture">
                        <div>
                            <p class="house__price">$ ${price} MXN</p>
                            <p class="house__address"> ${address} MXN</p>
                            <p class="house__city">${municipality}, ${country}.</p>
                            <div class="house__icons">
                                <p class="house__icon"><i class="fa-solid fa-bed"></i> ${room}</p>
                                <p class="house__icon"><i class="fa-solid fa-bath"></i> ${bathroom}</p>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                modal.style.display='block';

                const closeBtn = document.querySelector('.modal__close');
                closeBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    modal.style.display = 'none';
                });
            }
        });
    });
});