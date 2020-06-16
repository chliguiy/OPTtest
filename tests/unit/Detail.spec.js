import { mount } from '@vue/test-utils'
import Detail from '@/components/Detail.vue'
import flushPromises from 'flush-promises';

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
describe('Detail.vue', () => {
    const map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    let wrapper

    wrapper = mount(Detail, { propsData: { ProgrammeData: films }, attachTo: document.body });
    // Existance de la Vue
    it('Existance de la Vue', () => {
        expect(wrapper).toBeTruthy()
    })
    it('Existance de la Vue', () => {
        expect(wrapper.exists()).toBe(true);
    });
     //Existance de la balise Video
    it('Existance de la balise Video', () => {
        expect(wrapper.find('#myVideo').exists()).toBe(true);
    });

    // Test D'appel Web Service Partie HTML
    it("Test de la display de la vidéo ", async () => {

        await wrapper.vm.play();
        await flushPromises();
        expect(wrapper.vm.VideoDisplay).toBe(true);
    });
})


