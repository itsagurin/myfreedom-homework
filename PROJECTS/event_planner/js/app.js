class Event {
    constructor(id, title, date, description, type) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.description = description;
        this.type = type;
        this.timeStart = '';
        this.timeEnd = '';
    }

    render() {
        return `
            <div class="event-item ${this.type}" data-id="${this.id}" data-type="${this.type}">
                <div class="event-details">
                    <div class="event-header">
                        <span class="event-type-badge">${this.getTypeName()}</span>
                        <h3 class="event-title">${this.title}</h3>
                    </div>
                    <div class="event-time">
                        <span class="event-date">${this.formatDate()}</span>
                        ${this.renderTimeInfo()}
                    </div>
                    <p class="event-description">${this.description}</p>
                </div>
                <div class="event-actions">
                    <button class="edit-event">✏️</button>
                    <button class="delete-event">🗑️</button>
                </div>
            </div>
        `;
    }

    getTypeName() {
        return 'Событие';
    }

    formatDate() {
        const [year, month, day] = this.date.split('-');
        return `${day}.${month}.${year}`;
    }

    renderTimeInfo() {
        return '';
    }

    getFormFields() {
        return '';
    }

    updateFromForm(formData) {
        this.title = formData.title;
        this.date = formData.date;
        this.description = formData.description;
    }
}

class MeetingEvent extends Event {
    constructor(id, title, date, description, timeStart, timeEnd, location) {
        super(id, title, date, description, 'meeting');
        this.timeStart = timeStart || '';
        this.timeEnd = timeEnd || '';
        this.location = location || '';
    }

    getTypeName() {
        return 'Встреча';
    }

    renderTimeInfo() {
        if (this.timeStart && this.timeEnd) {
            return `<span class="event-time-range">с ${this.timeStart} до ${this.timeEnd}</span>`;
        } else if (this.timeStart) {
            return `<span class="event-time-start">в ${this.timeStart}</span>`;
        }
        return '';
    }

    getFormFields() {
        return `
            <div class="form-group">
                <label for="eventTimeStart">Время начала:</label>
                <input type="time" id="eventTimeStart" value="${this.timeStart}">
            </div>
            <div class="form-group">
                <label for="eventTimeEnd">Время окончания:</label>
                <input type="time" id="eventTimeEnd" value="${this.timeEnd}">
            </div>
            <div class="form-group">
                <label for="eventLocation">Место проведения:</label>
                <input type="text" id="eventLocation" placeholder="Укажите место" value="${this.location}">
            </div>
        `;
    }

    updateFromForm(formData) {
        super.updateFromForm(formData);
        this.timeStart = formData.timeStart;
        this.timeEnd = formData.timeEnd;
        this.location = formData.location;
    }
}

class DeadlineEvent extends Event {
    constructor(id, title, date, description, timeEnd, priority) {
        super(id, title, date, description, 'deadline');
        this.timeEnd = timeEnd || '';
        this.priority = priority || 'medium';
    }

    getTypeName() {
        return 'Дедлайн';
    }

    renderTimeInfo() {
        return `
            <span class="event-deadline ${this.priority}-priority">
                Срок: ${this.timeEnd ? `до ${this.timeEnd}` : 'весь день'}
            </span>
        `;
    }

    getFormFields() {
        return `
            <div class="form-group">
                <label for="eventTimeEnd">Время окончания:</label>
                <input type="time" id="eventTimeEnd" value="${this.timeEnd}">
            </div>
            <div class="form-group">
                <label for="eventPriority">Приоритет:</label>
                <select id="eventPriority">
                    <option value="low" ${this.priority === 'low' ? 'selected' : ''}>Низкий</option>
                    <option value="medium" ${this.priority === 'medium' ? 'selected' : ''}>Средний</option>
                    <option value="high" ${this.priority === 'high' ? 'selected' : ''}>Высокий</option>
                </select>
            </div>
        `;
    }

    updateFromForm(formData) {
        super.updateFromForm(formData);
        this.timeEnd = formData.timeEnd;
        this.priority = formData.priority;
    }
}

class ReminderEvent extends Event {
    constructor(id, title, date, description, timeStart, repeatFrequency) {
        super(id, title, date, description, 'reminder');
        this.timeStart = timeStart || '';
        this.repeatFrequency = repeatFrequency || 'none';
    }

    getTypeName() {
        return 'Напоминание';
    }

    renderTimeInfo() {
        let repeatText = '';
        switch (this.repeatFrequency) {
            case 'daily':
                repeatText = 'Ежедневно';
                break;
            case 'weekly':
                repeatText = 'Еженедельно';
                break;
            case 'monthly':
                repeatText = 'Ежемесячно';
                break;
            default:
                repeatText = '';
        }

        return `
            <span class="event-time-start">
                ${this.timeStart ? `в ${this.timeStart}` : 'весь день'}
            </span>
            ${repeatText ? `<span class="event-repeat">${repeatText}</span>` : ''}
        `;
    }

    getFormFields() {
        return `
            <div class="form-group">
                <label for="eventTimeStart">Время напоминания:</label>
                <input type="time" id="eventTimeStart" value="${this.timeStart}">
            </div>
            <div class="form-group">
                <label for="eventRepeat">Повторять:</label>
                <select id="eventRepeat">
                    <option value="none" ${this.repeatFrequency === 'none' ? 'selected' : ''}>Не повторять</option>
                    <option value="daily" ${this.repeatFrequency === 'daily' ? 'selected' : ''}>Ежедневно</option>
                    <option value="weekly" ${this.repeatFrequency === 'weekly' ? 'selected' : ''}>Еженедельно</option>
                    <option value="monthly" ${this.repeatFrequency === 'monthly' ? 'selected' : ''}>Ежемесячно</option>
                </select>
            </div>
        `;
    }

    updateFromForm(formData) {
        super.updateFromForm(formData);
        this.timeStart = formData.timeStart;
        this.repeatFrequency = formData.repeatFrequency;
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

        document.getElementById('eventType').addEventListener('change', () => this.updateFormFields());

        this.updateFormFields();
    }

    updateFormFields() {
        const typeSelect = document.getElementById('eventType');
        const additionalFieldsContainer = document.getElementById('additionalFields');

        if (!additionalFieldsContainer) return;

        const selectedType = typeSelect.value;
        let eventTemplate;

        switch (selectedType) {
            case 'meeting':
                eventTemplate = new MeetingEvent(0, '', '', '');
                break;
            case 'deadline':
                eventTemplate = new DeadlineEvent(0, '', '', '');
                break;
            case 'reminder':
                eventTemplate = new ReminderEvent(0, '', '', '');
                break;
            default:
                eventTemplate = new Event(0, '', '', '', selectedType);
        }

        additionalFieldsContainer.innerHTML = eventTemplate.getFormFields();
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

        const formData = {
            title,
            date,
            description
        };

        let newEvent;

        switch (type) {
            case 'meeting':
                formData.timeStart = document.getElementById('eventTimeStart')?.value || '';
                formData.timeEnd = document.getElementById('eventTimeEnd')?.value || '';
                formData.location = document.getElementById('eventLocation')?.value || '';
                newEvent = new MeetingEvent(
                    Date.now(), title, date, description,
                    formData.timeStart, formData.timeEnd, formData.location
                );
                break;
            case 'deadline':
                formData.timeEnd = document.getElementById('eventTimeEnd')?.value || '';
                formData.priority = document.getElementById('eventPriority')?.value || 'medium';
                newEvent = new DeadlineEvent(
                    Date.now(), title, date, description,
                    formData.timeEnd, formData.priority
                );
                break;
            case 'reminder':
                formData.timeStart = document.getElementById('eventTimeStart')?.value || '';
                formData.repeatFrequency = document.getElementById('eventRepeat')?.value || 'none';
                newEvent = new ReminderEvent(
                    Date.now(), title, date, description,
                    formData.timeStart, formData.repeatFrequency
                );
                break;
            default:
                newEvent = new Event(Date.now(), title, date, description, type);
        }

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
            document.getElementById('modalEventType').value = event.type;

            const additionalFieldsContainer = document.getElementById('modalAdditionalFields');
            if (additionalFieldsContainer) {
                additionalFieldsContainer.innerHTML = event.getFormFields();
            }

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
        const type = document.getElementById('modalEventType').value;

        if (!title || !date || !description) {
            this.showError('Пожалуйста, заполните все поля');
            return;
        }

        if (eventIndex !== -1) {
            const formData = {
                title,
                date,
                description
            };

            switch (type) {
                case 'meeting':
                    formData.timeStart = document.getElementById('eventTimeStart')?.value || '';
                    formData.timeEnd = document.getElementById('eventTimeEnd')?.value || '';
                    formData.location = document.getElementById('eventLocation')?.value || '';
                    break;
                case 'deadline':
                    formData.timeEnd = document.getElementById('eventTimeEnd')?.value || '';
                    formData.priority = document.getElementById('eventPriority')?.value || 'medium';
                    break;
                case 'reminder':
                    formData.timeStart = document.getElementById('eventTimeStart')?.value || '';
                    formData.repeatFrequency = document.getElementById('eventRepeat')?.value || 'none';
                    break;
            }

            this.events[eventIndex].updateFromForm(formData);
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

        const additionalFields = document.querySelectorAll('#additionalFields input, #additionalFields select');
        additionalFields.forEach(field => {
            if (field.type === 'select-one') {
                field.selectedIndex = 0;
            } else {
                field.value = '';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const eventManager = new EventManager();
});