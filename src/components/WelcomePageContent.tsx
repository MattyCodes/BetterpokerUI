'use client';

import Card from '@/components/Card.tsx';
import Modal from '@/components/Modal.tsx';
import { useState } from 'react';

export default function WelcomePageContent() {
  const [modalOpened, setModalOpened] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [roomName, setRoomName] = useState('');

  function closeModal() {
    setModalOpened(false);
    setFormSubmitted(false);
    setRoomName('');
  }

  function submitForm() {
    const chosenRoomName = roomName;

    setFormSubmitted(true);

    if (!!chosenRoomName && chosenRoomName.length > 0) {
      closeModal();

      // TODO: Handle loading stuff and mutation stuff.
      alert(chosenRoomName);
    }
  }

  function showInputError() {
    if (!formSubmitted) return false;

    return (!roomName || roomName.length === 0);
  }

  return (
    <div className="w-full">
      <Card className="mt-3 w-11/12 max-w-3xl p-8 text-lg mx-auto">
        <p className="mb-4">
          This here's a no-nonsense solution for all your story-pointing needs.
          Well, maybe not <i>all</i> your story-pointing needs, but it'll do.
        </p>

        <p>
          No need to sign up, ya screw-heads - just jump in a room to get started!
        </p>

        <button
          className="transform block bg-primary font-semibold rounded w-8/12 mx-auto mt-6 p-3.5 transition duration-500 hover:bg-primaryAlt"
          onClick={ () => setModalOpened(true) }
        >
          Start Room
        </button>
      </Card>

      <Modal opened={ modalOpened } close={ () => closeModal() }>
        <Modal.Title>
          Name Your Room!
        </Modal.Title>

        <Modal.Body className="flex flex-col text-left py-10 px-8">
          <label htmlFor="roomName" className="pb-3">
            What would you like your room to be called?
          </label>

          <input
            type="text"
            id="roomName"
            className={ 'max-w-md rounded p-3' + (showInputError() ? ' border-danger hover:border-danger' : '') }
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            placeholder="The Chamber of Secrets"
            value={ roomName }
            onInput={ (e) => setRoomName(e.target.value) }
            required
          />
        </Modal.Body>

        <Modal.Actions>
          <button
            className="py-2 mr-3 px-5 text-sm transform block bg-primary font-semibold rounded transition duration-500 hover:bg-primaryAlt"
            onClick={ () => submitForm() }
          >
            Let's Go
          </button>

          <button
            className="py-2 px-5 text-sm transform block bg-secondary font-semibold rounded transition duration-500 hover:bg-secondaryAlt"
            onClick={ () => closeModal() }
          >
            Cancel
          </button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}
