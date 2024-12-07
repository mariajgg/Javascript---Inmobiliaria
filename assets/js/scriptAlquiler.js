const p_alquiler = [
    {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: ["2 Habitaciones", "2 Baños"] ,
    costo: 2000,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: ["3 Habitaciones", "3 Baños"] ,
    costo: 2500,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: ["2 Habitaciones", "2 Baños"] ,
    costo: 2200,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Apartamento de lujo en zona costera',
    src: '../assets/img/beach_flat.jpg',
    descripcion: 'Este apartamento cuenta con las mejores vistas de la ciudad',
    ubicacion: '1410 NE Miami, South Beach, MI 31312',
    habitaciones: ["5 Habitaciones", "5 Baños"] ,
    costo: 10000,
    smoke: true,
    pets: false
    },
    {
    nombre: 'Apartamento grande en el centro de la ciudad',
    src: '../assets/img/big_flat.jpg',
    descripcion: 'Este apartamento cuenta con 1000 mt cuadrado útiles',
    ubicacion: '1555 SW Benjamin Franklin St',
    habitaciones: ["4 Habitaciones", "3 Baños"] ,
    costo: 8000,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: '../assets/img/luxury_flat.jpg',
    descripcion: 'Este apartamento de lujo cuenta con las habitaciones temáticas más llamativas',
    ubicacion: '1120 SE President Kennedy Dr',
    habitaciones: ["4 Habitaciones", "4 Baños"] ,
    costo: 12000,
    smoke: true,
    pets: true
    }
    ]

    const cartaAlquiler = document.getElementById("cartaAlquiler")

    for (const propiedad of p_alquiler) {
        cartaAlquiler.innerHTML += `<div class="col-md-4 mb-4">
            <div class="card">
                <img src=${propiedad.src} class="card-img-top" alt=${propiedad.nombre}/>
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${propiedad.habitaciones[0]} | <i class="fas fa-bath"></i> ${propiedad.habitaciones[1]}</p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                    <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}"><i class="fas fa-smoking${propiedad.smoke ? '' : '-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}</p>
                    <p class="${propiedad.pets ? 'text-success' : 'text-danger'}"><i class="fas fa-paw"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}</p>
                </div>
            </div>
        </div>`;
    }