
import { eventBus, EMAILS_UNREAD } from '../../../../js/event-bus.js';
import mailService from '../apps/email/services/mail-service.js'

export default {
    template: `
<section>
<header class="app-header">
         <router-link class="main-app-header-logo logo" :to="'/'" > </router-link> 
          <div class="unread-mail-count"><i class="far fa-envelope"></i><span>{{numOfUnread}}</span></div>
          <div class="apps" @click="toggleAppsNav"><i class="fas fa-th"></i></div>
        <div class="apps-btn-modal" v-if="appsNavShown">
                 <div class="apps-btn-card ">
                   <i class="fas fa-at"></i>
                   <p>Email</p>
                 </div>
                 <div class="apps-btn-card ">               
                   <i class="fas fa-home"></i>
                   <p>Home</p>
                 </div>
                 <div class="apps-btn-card ">
                    <i class="fas fa-sticky-note"></i>
                   <p>Keeps</p>
                 </div>
                 <div class="apps-btn-card ">
                    <i class="fas fa-book"></i>    
                   <p>Books</p>
                </div>

        </div>
        </header>

</section>
`,
    data() {
        return {
            unreadMails: '',
            appsNavShown: false

        }
    },

    methods: {

        toggleAppsNav() {
            this.appsNavShown = !this.appsNavShown
        }
    },
    computed: {
        numOfUnread() {
            return this.unreadMails;
        },
    },

    created() {
        this.unreadMails = mailService.getNumOfUnRead()
        eventBus.$on(EMAILS_UNREAD, unreadMail =>
            this.unreadMails = unreadMail)
    },
    components: {
        mailService,

    }


}