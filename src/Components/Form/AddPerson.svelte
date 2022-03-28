<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

let name;
let beltColour = 'Pick the best color';
let age;
let skills = [];

const hendelSubmit = (e) => {
    const person = {
        name,
        beltColour,
        age,
        skills,
        id: Math.round(Math.random() * 100),
    };
    dispatch('addPerson', person);
};
</script>

<form
    on:submit|preventDefault={hendelSubmit}
    class="flex flex-col items-center">
    <!-- name age -->
    <div class="flex mb-5">
        <input
            class="input w-full max-width-name_age mr-4 shadow-md"
            type="text"
            placeholder="Name"
            bind:value={name} />
        <input
            class="input w-full max-width-name_age shadow-md"
            type="number"
            placeholder="Age"
            bind:value={age} />
    </div>
    <!-- chekbox -->
    <div class="form-contro mb-5">
        <label class="cursor-pointer label">
            <span class="label-text mr-4">Pink</span>
            <input
                type="checkbox"
                bind:group={skills}
                value="run"
                class="checkbox checkbox-primary" />
        </label>
        <label class="cursor-pointer label">
            <span class="label-text mr-4">Blue</span>
            <input
                type="checkbox"
                bind:group={skills}
                value="sing"
                class="checkbox checkbox-primary" />
        </label>
        <label class="cursor-pointer label">
            <span class="label-text mr-4">Red</span>
            <input
                type="checkbox"
                bind:group={skills}
                value="drive"
                checked
                class="checkbox checkbox-primary" />
        </label>
    </div>
    <!-- select color -->
    <select
        bind:value={beltColour}
        class="select select-primary w-full max-width-name_age mb-5">
        <option disabled selected>Pick the best color</option>
        <option value="black">black</option>
        <option value="orange">orange</option>
        <option value="red">red</option>
    </select>

    <button class="btn btn-outline btn-primary">Add person</button>
</form>

<style>
.max-width-name_age {
    max-width: 14rem;
}
</style>
