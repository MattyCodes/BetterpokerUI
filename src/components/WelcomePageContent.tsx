'use client';

import Card from '@/components/Card.tsx';
import Modal from '@/components/Modal.tsx';
import { useState } from 'react';

export default function WelcomePageContent() {
  const [modalOpened, setModalOpened] = useState(false);

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
          className="transform block bg-primary font-semibold rounded w-8/12 mx-auto mt-6 p-3.5 transition duration-500 hover:bg-secondary"
          onClick={ () => setModalOpened(true) }
        >
          Start Room
        </button>
      </Card>

      <Modal opened={ modalOpened }>
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
            className="max-w-md rounded p-3 text-black"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            placeholder="The Chamber of Secrets"
            required
          />
        </Modal.Body>

        <Modal.Actions>
          <button
            className="py-2 px-5 text-sm transform block bg-primary font-semibold rounded transition duration-500 hover:bg-secondary"
            onClick={ () => setModalOpened(true) }
          >
            Let's Go
          </button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}
