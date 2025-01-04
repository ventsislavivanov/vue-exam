<script>

</script>

<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card p-4">
          <h3 class="text-center mb-4">
            Register User
          </h3>
          <form action="/register" method="POST">
            <!-- Име -->
            <div class="mb-3">
              <label for="firstName" class="form-label">First Name</label>
              <input type="text" class="form-control" id="firstName" name="firstName" required>
            </div>

            <!-- Фамилия -->
            <div class="mb-3">
              <label for="lastName" class="form-label">Фамилия</label>
              <input type="text" class="form-control" id="lastName" name="lastName" required>
            </div>

            <!-- Имейл -->
            <div class="mb-3">
              <label for="email" class="form-label">Имейл адрес</label>
              <input type="email" class="form-control" id="email" name="email" required>
            </div>

            <!-- Парола -->
            <div class="mb-3">
              <label for="password" class="form-label">Парола</label>
              <input type="password" class="form-control" id="password" name="password" required>
            </div>

            <!-- Потвърдете паролата -->
            <div class="mb-3">
              <label for="confirmPassword" class="form-label">Потвърдете паролата</label>
              <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" required>
            </div>

            <!-- Дата на раждане -->
            <div class="mb-3">
              <label for="dob" class="form-label">Дата на раждане</label>
              <input type="date" class="form-control" id="dob" name="dob" required>
            </div>

            <!-- Пол -->
            <div class="mb-3">
              <label for="gender" class="form-label">Пол</label><br>
              <input type="radio" id="male" name="gender" value="Male" class="form-check-input">
              <label for="male" class="form-check-label">Мъж</label><br>
              <input type="radio" id="female" name="gender" value="Female" class="form-check-input">
              <label for="female" class="form-check-label">Жена</label><br>
              <input type="radio" id="other" name="gender" value="Other" class="form-check-input">
              <label for="other" class="form-check-label">Друг</label>
            </div>

            <!-- Телефон -->
            <div class="mb-3">
              <label for="phone" class="form-label">Телефонен номер</label>
              <input type="tel" class="form-control" id="phone" name="phone">
            </div>

            <!-- Адрес -->
            <div class="mb-3">
              <label for="address" class="form-label">Адрес</label>
              <input type="text" class="form-control" id="address" name="address">
            </div>

            <!-- Чекбокс за условия -->
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="terms" name="terms" required>
              <label class="form-check-label" for="terms">Прочетох и приемам условията за ползване</label>
            </div>

            <!-- CAPTCHA (по избор) -->
            <div class="mb-3">
              <label for="captcha" class="form-label">Captcha</label>
              <!-- Вгради CAPTCHA тук -->
            </div>

            <!-- Бутон за регистрация -->
            <button type="submit" class="btn btn-primary w-100">Регистрирай се</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #495057;
  color: white;
}
.btn-primary {
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.btn-primary:hover {
  background-color: #0a58ca;
  border-color: #0a53be;
}
a {
  color: #0d6efd;
}
a:hover {
  color: #0a58ca;
}
</style>
