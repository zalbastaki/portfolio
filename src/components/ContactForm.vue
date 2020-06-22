<template>
    <form
        name="contact"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
        id="contact-form"
    >
        <input type="hidden" name="form-name" value="contact" />
        <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            aria-label="name"
        />
        <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            aria-label="email"
        />
        <textarea
            name="message"
            id="message"
            placeholder="message"
            aria-label="message"
        />
        <base-button button-type="submit">
            Send
        </base-button>
    </form>
</template>

<script>
    export default {
        name: 'contact-form',
    };
</script>

<style lang="scss" scoped>
    #contact-form {
        width: 100%;
        display: flex;
        flex-direction: column;

        input,
        textarea {
            display: block;
            width: calc(100% - 40px);
            border: 0;
            padding: 15px 20px;
            margin-bottom: 30px;
            font-size: 16px;

            &::placeholder {
                text-transform: capitalize;
                font-family: $primary-font;
                color: rgba($secondary-color, 0.4);
            }

            &:focus {
                outline: 3px solid rgba($primary-color, 0.3);
            }
        }

        textarea {
            resize: none;
            height: 20vh;
        }

        .button {
            align-self: flex-end;
        }
    }
</style>
