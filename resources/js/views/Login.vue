<template>
    <div class="page">
        <div class="page-single">
            <div class="container container-md">
                <div class="row">
                    <div class="col col-login mx-auto">
                        <div class="text-center mb-6">
                            <img src="/static/brand/tabler.svg" class="h-6" alt="">
                        </div>                        
                        <form class="card" action="" method="post">
                            <div class="card-body p-6">
                                <div class="card-title">Login to your account</div>
                                <div class="form-group">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Enter email">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">
                                        Password
                                        <a href="./forgot-password.html" class="float-right small">I forgot password</a>
                                    </label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"
                                        placeholder="Password">
                                </div>
                                <div class="form-group">
                                    <label class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" />
                                        <span class="custom-control-label">Remember me</span>
                                    </label>
                                </div>
                                <div class="form-footer">
                                    <button type="submit" class="btn btn-primary btn-block">Sign in</button>
                                </div>
                            </div>
                        </form>
                        <div class="text-center text-muted">
                            Don't have account yet? <a href="./register.html">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Overlay from '../components/Containers/Overlay.vue';

export default {
    components: {
        Overlay,
    },
    props: {
    },
    data() {
        return {
            login: {
                username: '',
                password: '',
                remember_me: false,
                error: '',
            },
            toggleEye: false
        }
    },
    methods: {
        proceedLogin() {
            this.login.error = this.login.username === '' ? this.$t('error.credentials_do_not_match')
                : this.login.password === '' ? this.$t('error.credentials_do_not_match')
                    : '';

            if (this.login.username === ''
                || this.login.password === '') {
                return;
            }

            window.location.href = '/dashboard';
        }
    }
}
</script>

<style lang="scss"></style>