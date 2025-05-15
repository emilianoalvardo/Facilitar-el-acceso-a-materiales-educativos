document.addEventListener('DOMContentLoaded', function() {
    const topicsSection = document.getElementById('topics');
    const detailsSection = document.getElementById('details');
    const topicTitle = document.getElementById('topic-title');

    // Function to select a topic
    window.selectTopic = function(topic) {
        topicsSection.style.display = 'none';
        detailsSection.style.display = 'block';
        
        // Set the title based on topic
        const titles = {
            'barro': 'Barro Tradicional',
            'pan': 'Pan de Horno de Leña',
            'maiz': 'Cultivo de Maíz Criollo',
            'pirekua': 'Pirekua - Música Tradicional'
        };
        
        topicTitle.textContent = titles[topic] || 'Tema Seleccionado';
        loadResources(topic);
    };

    // Function to go back
    window.goBack = function() {
        detailsSection.style.display = 'none';
        topicsSection.style.display = 'grid';
    };

    // Function to load resources based on topic
    function loadResources(topic) {
        // Update resource links based on selected topic
        updateResourceLinks(topic);
    }

    function updateResourceLinks(topic) {
        const videoList = document.querySelector('#details .resource-card:nth-child(1) .resource-list');
        const manualList = document.querySelector('#details .resource-card:nth-child(2) .resource-list');
        const teacherList = document.querySelector('#details .resource-card:nth-child(3) .resource-list');

        // Clear existing content
        videoList.innerHTML = '';
        manualList.innerHTML = '';
        teacherList.innerHTML = '';

        // Add new content based on topic
        const resources = getResourcesForTopic(topic);
        
        resources.videos.forEach(video => {
            videoList.innerHTML += `
                <li data-topic="${topic}">
                    <a href="#" class="resource-link video-link" data-video="${video.url}">
                        <div class="resource-title">${video.title}</div>
                        <div class="resource-description">${video.description}</div>
                    </a>
                </li>`;
        });

        resources.manuales.forEach(manual => {
            manualList.innerHTML += `
                <li>
                    <a href="${manual.url}" class="resource-link manual-link">
                        <div class="resource-title">${manual.title}</div>
                        <div class="resource-description">${manual.description}</div>
                    </a>
                </li>`;
        });

        resources.profesores.forEach(profesor => {
            teacherList.innerHTML += `
                <li>
                    <a href="${profesor.url}" class="resource-link teacher-link">
                        <div class="resource-title">${profesor.title}</div>
                        <div class="resource-description">${profesor.description}</div>
                    </a>
                </li>`;
        });
    }

    function getResourcesForTopic(topic) {
        const resourcesData = {
            'barro': {
                videos: [
                    {
                        title: 'Técnicas básicas de modelado',
                        description: 'Aprende las técnicas fundamentales del trabajo en barro',
                        url: 'videos/barro-tecnicas.mp4'
                    },
                    {
                        title: 'Acabados y decoración',
                        description: 'Técnicas de esmaltado y decoración tradicional',
                        url: 'videos/barro-acabados.mp4'
                    }
                ],
                manuales: [
                    {
                        title: 'Guía completa de alfarería',
                        description: 'Manual detallado con técnicas paso a paso',
                        url: 'manuales/guia-barro.html'
                    }
                ],
                profesores: [
                    {
                        title: 'Maestro Juan Pérez',
                        description: '30 años de experiencia en alfarería tradicional',
                        url: 'profesores/juan-perez.html'
                    }
                ]
            },
            'pan': {
                videos: [
                    {
                        title: 'Preparación de masa tradicional',
                        description: 'Técnicas para hacer masa perfecta para pan artesanal',
                        url: 'videos/pan-masa.mp4'
                    },
                    {
                        title: 'Horneado en horno de leña',
                        description: 'Aprende a usar el horno tradicional de leña',
                        url: 'videos/pan-horneado.mp4'
                    }
                ],
                manuales: [
                    {
                        title: 'Manual de panadería tradicional',
                        description: 'Recetas y técnicas ancestrales de panadería',
                        url: 'manuales/guia-pan.html'
                    }
                ],
                profesores: [
                    {
                        title: 'Maestra Ana Ramírez',
                        description: 'Experta en pan tradicional michoacano',
                        url: 'profesores/ana-ramirez.html'
                    }
                ]
            },
            'maiz': {
                videos: [
                    {
                        title: 'Técnicas de cultivo tradicional',
                        description: 'Métodos ancestrales de siembra y cultivo',
                        url: 'videos/maiz-cultivo.mp4'
                    },
                    {
                        title: 'Conservación de semillas',
                        description: 'Cómo preservar las variedades criollas',
                        url: 'videos/maiz-semillas.mp4'
                    }
                ],
                manuales: [
                    {
                        title: 'Guía de agricultura tradicional',
                        description: 'Manual completo de cultivo de maíz criollo',
                        url: 'manuales/guia-maiz.html'
                    }
                ],
                profesores: [
                    {
                        title: 'Don Miguel García',
                        description: 'Agricultor tradicional con 40 años de experiencia',
                        url: 'profesores/miguel-garcia.html'
                    }
                ]
            },
            'pirekua': {
                videos: [
                    {
                        title: 'Técnicas vocales tradicionales',
                        description: 'Aprende las bases del canto purépecha',
                        url: 'videos/pirekua-tecnicas.mp4'
                    },
                    {
                        title: 'Historia y significado',
                        description: 'Conoce el origen y la importancia cultural',
                        url: 'videos/pirekua-historia.mp4'
                    }
                ],
                manuales: [
                    {
                        title: 'Manual de Pirekua',
                        description: 'Guía completa de música tradicional purépecha',
                        url: 'manuales/guia-pirekua.html'
                    }
                ],
                profesores: [
                    {
                        title: 'Maestra Rosa Flores',
                        description: 'Cantante tradicional de pirekuas',
                        url: 'profesores/rosa-flores.html'
                    }
                ]
            }
        };

        return resourcesData[topic] || {videos: [], manuales: [], profesores: []};
    }
});

// Video Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    const muteButton = document.getElementById('muteButton');
    const closeButton = document.querySelector('.close-button');
    const videoLinks = document.querySelectorAll('.video-link');

    // Handle video links
    videoLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const videoUrl = this.getAttribute('data-video');
            openVideoModal(videoUrl);
        });
    });

    function openVideoModal(videoUrl) {
        videoPlayer.src = videoUrl;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        videoPlayer.play().catch(function(error) {
            console.log("Video play failed:", error);
        });
    }

    function closeVideoModal() {
        modal.classList.remove('active');
        videoPlayer.pause();
        videoPlayer.src = '';
        document.body.style.overflow = '';
    }

    // Close modal handlers
    closeButton.addEventListener('click', closeVideoModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeVideoModal();
        }
    });

    // Mute/unmute handler
    muteButton.addEventListener('click', function() {
        videoPlayer.muted = !videoPlayer.muted;
        muteButton.querySelector('.icon-volume').textContent = 
            videoPlayer.muted ? '🔇' : '🔊';
    });

    // Escape key handler
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeVideoModal();
        }
    });

    // Show only videos for selected topic
    function selectTopic(topic) {
        const allVideoItems = document.querySelectorAll('.resource-list li');
        allVideoItems.forEach(item => {
            if (item.getAttribute('data-topic') === topic) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
});