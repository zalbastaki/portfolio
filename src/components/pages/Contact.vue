<template>
    <div id="contact">
        <div class="background" />
        <div class="text-wrapper">
            <base-text type="h3">{{ data.title }}</base-text>
            <form
                name="contact"
                method="post"
                data-netlify="true"
                netlify-honeypot="bot-field"
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
        </div>

        <div class="image-wrapper"></div>
    </div>
</template>

<script>
    import dataLoader from '../../mixins/dataLoader';
    import data from '../../content/contact.md';

    export default {
        name: 'contact',

        mixins: [dataLoader(data)],
    };
</script>

<style lang="scss" scoped>
    #contact {
        flex-direction: row;
        align-items: center;
        position: relative;

        .background {
            width: 100vw;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: $tertiary-color;
        }

        .text-wrapper,
        .image-wrapper {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            z-index: 1;
        }

        .text-wrapper {
            width: 55%;
            padding: 0 7.5%;

            .h3 {
                margin-bottom: 30px;
            }

            form {
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
        }

        .image-wrapper {
            width: 40%;
        }
    }
</style>
