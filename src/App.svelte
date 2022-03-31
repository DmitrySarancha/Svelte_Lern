<script>
import { fly, fade } from 'svelte/transition';
import { circIn } from 'svelte/easing';
import AddPerson from './Components/Form/AddPerson.svelte';
import Modal from './Components/Modal.svelte';
import Header from './Components/Header/Header.svelte';

// modal
let showModal = false;
let isPromo = false;

const openModal = () => {
    showModal = true;
    isPromo = true; 
};
// modal end

let people = [];

const removePerson = (id) => {
    people = people.filter((person) => person.id !== id);
};

const addPerson = (e) => {
    const data = e.detail;
    // name;
    if (data.name === undefined) return alert('Введите имя!');
    if (isNaN(data.name) === false) return alert('Используйте только строки.');
    // age
    if (data.age === undefined) return alert('Введите возраст...');
    // belte
    if (data.beltColour === 'Pick the best color')
        return alert('Выберете цвет!');

    people = [data, ...people];

    // modal
    showModal = false;
    isPromo = false;
};
</script>

<Header on:click={openModal} />
<!-- modal -->
<Modal {isPromo} {showModal} on:click={openModal}>
    <!-- AddPerson form -->
    <AddPerson on:addPerson={addPerson} />
</Modal>

<main class="flex flex-col items-center  max-w-xl mx-auto mt-5">
    {#each people as person (person.id)}
        <div
            transition:fly={{
                delay: 100,
                duration: 300,
                x: 0,
                x: 200,
                easing: circIn,
            }}
            class="card items-center w-96 bg-base-300 text-base-content shadow-xl mb-8">
            <div class="card-body">
                <!-- color person name -->
                {#if person.beltColour === 'black'}
                    <h4 class="card-title text-black py-3">{person.name}</h4>
                {:else if person.beltColour === 'orange'}
                    <h4 class="card-title text-orange-600 py-3">
                        {person.name}
                    </h4>
                {:else if person.beltColour === 'red'}
                    <h4 class="card-title text-red-600 py-3">{person.name}</h4>
                {/if}
                <!-- color person name -->
                <p class="pb-6">
                    {person.age} years old, {person.beltColour} belt.
                </p>
                <div class="card-actions justify-center">
                    <button
                        class="btn btn-outline btn-secondary mb-3"
                        on:click={() => removePerson(person.id)}>
                        delete
                    </button>
                </div>
            </div>
        </div>
    {:else}
        <p
            transition:fade={{ delay: 400, duration: 300 }}
            class="text-primary text-center">
            There are no people to show...
        </p>
    {/each}
</main>

<style global>
@tailwind base;
@tailwind utilities;
@tailwind components;
/* global */
body {
    @apply bg-base-200  w-full h-screen;
}
/* global */
</style>
