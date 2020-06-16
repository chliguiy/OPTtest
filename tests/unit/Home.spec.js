import { mount, createLocalVue } from '@vue/test-utils'
import Home from '@/components/Home.vue'
import OcsService from "@/services/OcsService";
import flushPromises from "flush-promises";
import Vuetify from 'vuetify';
import Vue from 'vue';
Vue.config.ignoredElements = [
    'v-icon', 'v-card', 'v-card-text', 'v-app', 'b-navbar',
     'v-img', 'b-nav-form', 'b-form-input', 'v-btn', 'v-col',
      'v-row', 'v-container','v-list-item','v-list-item-content',
      'v-card-subtitle','v-card-actions','v-list-item','v-list-item-title'
];
describe('Home.vue', () => {
    let wrapper
    beforeEach(() => {
        const localVue = createLocalVue()
        let vuetify = new Vuetify();
        localVue.use(vuetify)
        // create a local <App> container with a [data-app] attribute
        // to prevent v-tooltip "Unable to locate target" warning

        document.body.setAttribute('data-app', true)

        wrapper = mount(Home, {
            localVue
        })
    })

    //Existance de la Vue
    it('Existance de la Vue', () => {
        expect(wrapper).toBeTruthy()
    })
    it('Existance de la Vue', () => {
        expect(wrapper.exists()).toBe(true);
    });
    // Test de l'exictenance des élements HTML
    it('Existance d\'un button de recherche', () => {
        const button = wrapper.find('button').exists()
        expect(button).toBe(true)
    })
    it('Existance d\'un Champs de recherche', () => {
        expect(wrapper.find('#search').exists()).toBe(true)
    })



   // Test de click sur le button
    it("Test de click sur le button", async () => {

        const textInput = wrapper.find('input[type="text"]')
        textInput.setValue('game')
        wrapper.find("button").trigger("click");
        await flushPromises();
        expect(wrapper.find('v-card').exists()).toBe(true)
    });

    // Test D'appel Web Service Partie HTML sur la valeur de titre
    it("Test D'appel Web Service Partie HTML sur la valeur de titre", async () => {
        wrapper.vm.title='amour';
        await wrapper.vm.getProgrammes();
        await flushPromises();
        expect(wrapper.find('v-card-actions').exists()).toBe(true)
    });

     // Test D'appel Web Service Partie Json sur la valeur de titre
     it("Test D'appel Web Service Partie Json sur la valeur de titre", async () => {
        const response = {
            "template": "search",
            "parentalrating": 1,
            "title": "Recherche",
            "offset": 1,
            "limit": "none",
            "next": null,
            "previous": null,
            "total": 1,
            "count": 1,
            "filter": null,
            "sort": null,
            "contents": []
        };
        const films = {
            "title": [
                {
                    "color": null,
                    "type": "text",
                    "value": "LES CHRONIQUES DE ZORRO"
                }
            ],
            "subtitle": "saison 1",
            "subtitlefocus": null,
            "highlefticon": null,
            "highrighticon": null,
            "lowrightinfo": null,
            "imageurl": "/data_plateforme/saison/1481/origin_leschronixxw0115979_jlrup.jpg?size=small",
            "fullscreenimageurl": "/data_plateforme/saison/1481/origin_leschronixxw0115979_jlrup.jpg?size=large",
            "id": "LESCHROXX26W0116005",
            "detaillink": "/apps/v2/details/serie/PSLESCHRONIW0128340",
            "duration": "PT21M48S",
            "playinfoid": {
                "hd": "E56D5010-CA93-7B40-7CF7-011706A484AE",
                "sd": "E56D5010-CA93-7B40-7CF7-011706A484AE",
                "uhd": null
            }
        };
        response.contents.push(films);

        wrapper.vm.title='zorro';
        await wrapper.vm.getProgrammes();
        await flushPromises();
        expect(wrapper.vm.ProgrammeData[0].title[0].value).toBe(response.contents[0].title[0].value)
    });

    // Test D'appel Web Service sur la valeur de titre
    it('Test de Web Service sur la valeur de titre', () => {
        const response = {
            "template": "search",
            "parentalrating": 1,
            "title": "Recherche",
            "offset": 1,
            "limit": "none",
            "next": null,
            "previous": null,
            "total": 1,
            "count": 1,
            "filter": null,
            "sort": null,
            "contents": []
        };
        const films = {
            "title": [
                {
                    "color": null,
                    "type": "text",
                    "value": "LES CHRONIQUES DE ZORRO"
                }
            ],
            "subtitle": "saison 1",
            "subtitlefocus": null,
            "highlefticon": null,
            "highrighticon": null,
            "lowrightinfo": null,
            "imageurl": "/data_plateforme/saison/1481/origin_leschronixxw0115979_jlrup.jpg?size=small",
            "fullscreenimageurl": "/data_plateforme/saison/1481/origin_leschronixxw0115979_jlrup.jpg?size=large",
            "id": "LESCHROXX26W0116005",
            "detaillink": "/apps/v2/details/serie/PSLESCHRONIW0128340",
            "duration": "PT21M48S",
            "playinfoid": {
                "hd": "E56D5010-CA93-7B40-7CF7-011706A484AE",
                "sd": "E56D5010-CA93-7B40-7CF7-011706A484AE",
                "uhd": null
            }
        };
        response.contents.push(films);

        return OcsService.getProgrammes({ title: 'zorro' }).then(resp => expect(resp.data).toEqual(response));
    });
})


