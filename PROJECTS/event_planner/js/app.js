class Event {
    constructor(id, title, date, description, type) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.description = description;
        this.type = type;
    }

    render() {
        return `
            <div class="event-item" data-id="${this.id}" data-type="${this.type}">
                <div class="event-details">
                    <strong>${this.title}</strong>
                    <p>${this.date} - ${this.description}</p>
                </div>
                <div class="event-actions">
                    <button class="edit-event">✏️</button>
                    <button class="delete-event">🗑️</button>
                </div>
            </div>
        `;
    }
}

class EventManager {
    constructor() {
        this.events = [];
        this.initEventListeners();
    }

    initEventListeners() {
        document.getElementById('addEventBtn').addEventListener('click', () => this.addEvent());
        document.getElementById('typeFilter').addEventListener('change', () => this.filterEvents());
        document.getElementById('eventsList').addEventListener('click', (e) => {
            if (e.target.classList.contains('edit-event')) this.editEvent(e.target.closest('.event-item'));
            if (e.target.classList.contains('delete-event')) this.deleteEvent(e.target.closest('.event-item'));
        });

        const modal = document.getElementById('eventModal');
        const closeBtn = document.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => modal.style.display = 'none');
        document.getElementById('saveEventBtn').addEventListener('click', () => this.saveEditedEvent());
    }

    addEvent() {
        this.clearErrorMessages();

        const title = document.getElementById('eventTitle').value.trim();
        const date = document.getElementById('eventDate').value;
        const description = document.getElementById('eventDescription').value.trim();
        const type = document.getElementById('eventType').value;

        if (!title || !date || !description) {
            this.showError('Пожалуйста, заполните все поля');
            return;
        }

        const newEvent = new Event(Date.now(), title, date, description, type);
        this.events.push(newEvent);
        this.renderEvents();
        this.clearForm();
    }

    showError(message) {
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error-message');
        errorDiv.textContent = message;

        const eventForm = document.querySelector('.event-form');
        eventForm.insertBefore(errorDiv, eventForm.firstChild);
    }

    clearErrorMessages() {
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
    }

    renderEvents() {
        const eventsList = document.getElementById('eventsList');
        eventsList.innerHTML = this.events
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map(event => event.render())
            .join('');
    }

    filterEvents() {
        const typeFilter = document.getElementById('typeFilter').value;
        const eventItems = document.querySelectorAll('.event-item');

        eventItems.forEach(item => {
            const eventType = item.dataset.type;
            item.style.display = (typeFilter === 'all' || eventType === typeFilter) ? '' : 'none';
        });
    }

    editEvent(eventElement) {
        const id = parseInt(eventElement.dataset.id);
        const event = this.events.find(e => e.id === id);

        if (event) {
            const modal = document.getElementById('eventModal');
            document.getElementById('modalEventTitle').value = event.title;
            document.getElementById('modalEventDate').value = event.date;
            document.getElementById('modalEventDescription').value = event.description;
            modal.dataset.editId = id;
            modal.style.display = 'block';
        }
    }

    saveEditedEvent() {
        this.clearErrorMessages();

        const modal = document.getElementById('eventModal');
        const id = parseInt(modal.dataset.editId);
        const eventIndex = this.events.findIndex(e => e.id === id);

        const title = document.getElementById('modalEventTitle').value.trim();
        const date = document.getElementById('modalEventDate').value;
        const description = document.getElementById('modalEventDescription').value.trim();

        if (!title || !date || !description) {
            this.showError('Пожалуйста, заполните все поля');
            return;
        }

        if (eventIndex !== -1) {
            this.events[eventIndex].title = title;
            this.events[eventIndex].date = date;
            this.events[eventIndex].description = description;

            this.renderEvents();
            modal.style.display = 'none';
        }
    }

    deleteEvent(eventElement) {
        const id = parseInt(eventElement.dataset.id);
        this.events = this.events.filter(event => event.id !== id);
        this.renderEvents();
    }

    clearForm() {
        document.getElementById('eventTitle').value = '';
        document.getElementById('eventDate').value = '';
        document.getElementById('eventDescription').value = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const eventManager = new EventManager();
});